import { ServiceAccount } from 'firebase-admin';

export const firebaseConfig = {
  type: 'service_account',
  project_id: 'talktogether-2cc24',
  private_key_id: '37f2fa59f610c3817ba0282fcdb12dbe165c6750',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDDX6sSNX/XZPwZ\n5arxvfXoVAOraghGYUjHwNS9XWSe466B8cOjWs0WjrWeXAJ5YITyE8Z9vfHIPCKC\no+CJZ3a5qLvIQFuKUDZkeiR+NnM+69kTRO/7HIbzWe68EVDcGeI2Co3/BM55gMul\nAnfrVYC/KbKgQEFzjQEk1CRn+liH2H/UbkI/dDDK3vxeUMy+jiIClWo2dxdWLAF7\nt0GQPh9QjWUnP+Suk+dz1i9hQMNXlaq2iBTo80h5TGIybP/SvFG9alSgQQtO8zBJ\nCo7kvfv115Brkdg/NuDpGjOOXfFK6cXsIpWwD57PIHNS+QnL7S/zYDRnGWF1FEYN\nb8sHrRItAgMBAAECggEACHEZC3Wf0z8EDJtpnj3qwvHkYbL4bhAUjLsGhjMjnqDw\nYKGBZkzNWUjrzI6ltbhnri0QEc1UBeahSBtMH6vGi8GgcYfkXK7YFtHXQ1PXeXPH\n4qcDJorGQvwTDnHCGGyO425j0c3TnRjlU7kuVM8SO9BRrU5xdYx1bPG0rAB7dE0h\nbrHOSD75ZzW54435DCuCdAFgEeJBOgyfGMPYHozSuLL+7/MjttHxHGviidNbBtkt\naLEWFalBv64FMdDO/nJkNsKupcivL+Cr5OckvZcngnm9CG9t8WrBM7MA80eD6M9k\nyoSDMXcc3dgEGeMVSqJHHZjsUdLwHvVCplamzJTBAQKBgQDi71HLNRDZ7cwl51sy\nEWR9aaunEAmRNwCXT3lhhkNRyWb4IdDH5S63cuexqVorkYw3bw8ndKxChZzY5VyA\njSXMC178vp/nkStvuyxp2O0w8HpZN3UY+TX1m19w+jd6RkcnQ6oWawRcaRuNMt7z\nz2e8Uckut6JroTz4BN6nDL6dAQKBgQDcZYfGqKODJQXmsHfvJUItJoAeerjpED5/\nz+ZgA78/Y5oVskdMKWmIec0oj9bJHY02cxHjSLeg/+NwdHUcXrU46BelfuyPszdD\nSx+99w4OEOQHbqblB+Dn08d+UjQ8ABw50i/iVNB3lQ/pGEm2XXkFcNBSqgov8Zgx\nhlvV0/Z5LQKBgBAruYpfZ6n/1fJFgCwbLSv6oa6v596fKr2dfirC5H0petrnnfcA\nj8mmuHfid3hvUKyKj2viVnwPBVQ3U9YdOLpHfSdJdh+MKqo1jj6kpJI+MJm25/M1\nnvC3d5+XVOizpVJY8f/S9GaZXss6+sQo3V1//nQDxeEhhjSuNCd3MwYBAoGBAMNG\nhkXDV5U0MYVTaACQ/5Bno27eB4Yg6W9vckwyJbpxcq20ly1pJ+NPIDLHN2Rcdaj/\nzaKW5HSXJRqXZMgtNd5k7caprcoo3VcXcdlr050s5A2dwev9zg05/HD1PujGpDuq\n+thLk6XQghdieLVHHppueXY0yO/v3IxM4oOT2bdFAoGAPIzpmDozvmxqlxjf1b5Z\n2rorZWFylpUJRpa9JMD4/+1b/CieE2D1WhxlZEYIFjlvm2Sog4jotnjMeTB8ncId\nEvxiYX7R3zOyPu3M5Ce/ZP90Te6OcaTHADI87Mp1A0bqBfVMeXpBaJnlL3F5/iSu\nADoe11fqk/uv8ftyCP+dqj8=\n-----END PRIVATE KEY-----\n',
  client_email:
    'firebase-adminsdk-ntzvn@talktogether-2cc24.iam.gserviceaccount.com',
  client_id: '111653536330822833509',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ntzvn%40talktogether-2cc24.iam.gserviceaccount.com',
} as ServiceAccount;
