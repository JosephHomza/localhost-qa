export function result({operation,status="ok",findings=[],artifacts=[],metadata={}}){return{schemaVersion:"1.0",plugin:"localhost-qa",operation,status,readOnly:true,findings,artifacts,metadata,timestamp:new Date().toISOString()};}
export function emit(value){process.stdout.write(`${JSON.stringify(value,null,2)}\n`);}
