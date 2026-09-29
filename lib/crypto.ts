import crypto from 'crypto';
function key(){const raw=process.env.TOKEN_ENCRYPTION_KEY||'';if(!raw)throw new Error('TOKEN_ENCRYPTION_KEY ausente');return crypto.createHash('sha256').update(raw).digest()}
export function encryptToken(value:string){const iv=crypto.randomBytes(12),c=crypto.createCipheriv('aes-256-gcm',key(),iv);const enc=Buffer.concat([c.update(value,'utf8'),c.final()]);return [iv.toString('base64url'),c.getAuthTag().toString('base64url'),enc.toString('base64url')].join('.')}
export function decryptToken(value:string){const [i,t,d]=value.split('.');const c=crypto.createDecipheriv('aes-256-gcm',key(),Buffer.from(i,'base64url'));c.setAuthTag(Buffer.from(t,'base64url'));return Buffer.concat([c.update(Buffer.from(d,'base64url')),c.final()]).toString('utf8')}
