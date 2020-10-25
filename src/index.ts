// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const lambdaHandler = async (event: any = {}): Promise<any> => {
    const body = JSON.parse(event.body)
    console.log(body)
    return {
        statusCode: 200,
    }
}
