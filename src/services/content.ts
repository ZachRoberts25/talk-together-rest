import { ObjectId } from 'mongodb';
import { getMongoClient } from './../gateway/mongo';
interface Content {
  _id?: string | ObjectId;
  creatorId: string;
  summary: string;
  file: string;
  approved: boolean;
}

interface GetContent {
  page: number;
  pageSize: number;
  creatorId: string;
}

const getCollection = async () => {
  const client = await getMongoClient();
  return client.collection<Content>('content');
};

export const createContent = async (content: {
  creatorId: string;
  summary: string;
  file: string;
}) => {
  const col = await getCollection();
  await col.insertOne({ ...content, approved: false });
};

export const approveContent = async (contentId: string) => {
  const col = await getCollection();
  const _id =
    typeof contentId === 'string' ? new ObjectId(contentId) : contentId;
  await col.updateOne({ _id }, { approved: true });
};

export const getUnapprovedContent = async (
  page: number = 0,
  pageSize: number = 100
) => {
  const col = await getCollection();
  const ret = await col.find(
    { approved: false },
    { limit: pageSize, skip: page * pageSize }
  );
  return ret.toArray();
};

export const getContent = async (req: GetContent) => {
  const col = await getCollection();
  const ret = await col.find(
    {
      creatorId: req.creatorId,
    },
    {
      limit: req.pageSize,
      skip: req.pageSize * req.page,
    }
  );

  return ret.toArray();
};
