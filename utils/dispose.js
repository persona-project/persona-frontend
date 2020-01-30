export function list2Ob(payload){
    let list1=[]
    let list2=[]
    payload.forEach(element => {
        list1.push(element.type)
        list2.push(element.count)
    });
    let data={"type":list1,"count":list2}
    return data
}
