

export default function Card(props) {
    return (
       <div className=" align-center items-center justify-center text-center">
            <div className="card items-center align-center justify-center text-center relative z-10 hover:opacity-50 duration-500 ">
                <img className="w-64 rounded" src={props.Imagem} alt="imagem-card" />
                <button className="z-1 absolute top-32 left-8 text-3xl bg-sky-700 h-16 w-48 rounded-2xl opacity-0 hover:opacity-100 duration-500">DOWNLOAD</button>
            </div>
            <h3 className="font-bold text-4xl z-1 mb-10 mt-1">{props.Titulo}</h3>
        </div>
    )
}
