//定义接口，限定person对象的具体属性
export interface PersonInter {
    id:string,
    name: string,
    age: number
}

//一个自定义类型
//export type Persons = Array<PersonInter>
export type Persons = PersonInter[]