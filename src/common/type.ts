export interface APIRequest {
    ebId: string
    fileName: string
    data?: BidItem[]
}

export interface APIResponse {

}
export interface BidItem {
    amount: number
    maxAmount: number
    price: number
    name: string
    saleAmount: number
    status: BidStatus
    clients: Client[]
}
//구매자
export interface Client {
    name: string
    amount: number
}
export enum BidStatus{
    ready,
    sale,
    end
}
