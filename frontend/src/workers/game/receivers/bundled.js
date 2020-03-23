export const receiver = 'bundled';

export function receive(page, data)
{
    var messages = data.messages != null ? data.messages : null;

    if(messages != null && Array.isArray(messages))
    {
        for(var message of messages)
        {
            if(message.receiver && message.data)
                page.handleMessage(message.receiver, message.data);
        }
    }
}
