declare module '@modelcontextprotocol/sdk/server/websocket.js' {
  export class WebSocketServerTransport {
    constructor(ws: any);
    start(): Promise<void>;
    send(message: unknown): Promise<void>;
    close(): Promise<void>;
  }
}
