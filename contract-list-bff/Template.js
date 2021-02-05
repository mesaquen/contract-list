const CONTRACT_TYPES = {
    PROFIT_SPLIT: 'profit',
    BUY_RATE: 'buy'
}

const templates = [
    {
        id: '7762408e-b5df-4beb-addc-aa295cc82f80',
        title: 'Template 1',
        processingFee: 1,
        transactionFee: 2,
        splitIso: 0,
        type: CONTRACT_TYPES.BUY_RATE,
        agent: {
            id: 1,
            splitWith: {
                id:2,
                splitPercentage: 3.5
            }   
        }
    },
    {
        id: '03192969-cc4f-4b59-8325-a6fbd66b1b59',
        title: 'Template 2',
        processingFee: 0,
        transactionFee: 0,
        splitIso: 3,
        type: CONTRACT_TYPES.PROFIT_SPLIT,
        agent: {
            id: 3,
            splitWith: {
                id:5,
                splitPercentage: 3.5
            }   
        }
    }
]

module.exports  = {templates, CONTRACT_TYPES}