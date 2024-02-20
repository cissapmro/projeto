import { NextResponse } from "next/server"

/*
GET - LISTAR
POST - CADASTRAR
PUT - ALTERAR
DELETE - EXCUIR
*/
let tarefas = ['Comprar coca', 'Estudar Next js']

//LISTAR AS TAREFAS
export const GET = async (request: Request) => {
    // return NextResponse.json({ok: true});
    return NextResponse.json(tarefas);
};
//CADASTRAR A TAREFA
export const POST = async(request: Request) => {
    const data = await request.json();
   // console.log(data);
    tarefas.push(data.name);

    return NextResponse.json({tarefas});
}
//ALTERAR A TAREFA
//http://localhost:3000/api/tarefas?index=0
export const PUT = async(request: Request) => {
    //Pegar o parâmetro da url
  const { searchParams} = new URL(request.url);
  const index = searchParams.get("index"); //posição

  //PEGAR OS DADOS
  const data = await request.json();
  //console.log("data" +data.name);
  //console.log("index" +index);
  tarefas[Number(index)] = data.name;

    return NextResponse.json({message: "Tarefa alterada com sucesso!!"});
}
export const DELETE = async(request: Request) => {
    const { searchParams} = new URL(request.url);
    const index = searchParams.get("index");

    tarefas.splice(Number(index), 1);
    return NextResponse.json({message: "Tarefa deletada com sucesso!"});
}