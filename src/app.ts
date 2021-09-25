import { getCreators } from './services/creator';
import { getContent, createContent, approveContent } from './services/content';
import { firebaseConfig } from './firebase-config';
import express from 'express';
import admin from 'firebase-admin';
import { json } from 'body-parser';

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
});
const withAuthorization = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const jwt = req.headers.authorization!;
  if (!jwt) {
    // throw an
    res.status(403).send('Unauthorized');
    return;
  }
  const id = await admin.auth().verifyIdToken(jwt);
  res.locals.userId = id.uid;
  next();
};

app.use(json());
app.use((req, res, next) => {
  console.log(`Requesting: ${req.url}`);
  next();
});

app.post('/content', withAuthorization, async (req, res) => {
  await createContent({
    creatorId: res.locals.userId,
    summary: req.body.summary,
    file: req.body.file,
  });
  res.status(204).send();
});

app.post('/content/:contentId/approve', withAuthorization, async (req, res) => {
  await approveContent(req.params.contentId);
  res.status(204).send();
});

app.get('/content', async (req, res) => {
  const content = await getContent({
    pageSize: 100,
    page: 0,
    creatorId: req.query.creatorId as string,
  });
  res.send(content);
});

app.get('/creators', async (req, res) => {
  const creators = await getCreators(
    parseInt(req.query.page as string),
    parseInt(req.query.pageSize as string)
  );

  res.send(creators);
});
