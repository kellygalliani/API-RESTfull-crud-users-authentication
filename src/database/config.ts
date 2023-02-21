import client from './connection'

const connectDatabase = async (): Promise<void> =>{
    await client.connect()
}

export default connectDatabase