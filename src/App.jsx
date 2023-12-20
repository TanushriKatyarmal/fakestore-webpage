
import {useState,useEffect} from 'react'


const App = () =>{
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then(d=>setData(d))
    
    }, );

    return(
        
        <div className='h-auto w-auto flex flex-wrap gap-8 justify-center mt-0' >
            <div className='font-[Poppins] mt-0 min-w-full'>
                <header className="mt-0">
                    <nav className='flex justify-between items-center h-20 w-[92%] mt-0  mx-auto bg-black text-white min-w-full'>
                        <div className='flex justify-around ml-6'>
                            <h1 className='text-3xl text-bolder text-orange-500' >FakeStore👜</h1>
                        </div>
                        <div class="nav-links duration-500 md:static absolute  md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                            <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                                <li>
                                    <a class="hover:text-orange-500" href="#">Home</a>
                                </li>
                                <li>
                                    <a class="hover:text-orange-500" href="#">Fashion</a>
                                </li>
                                <li>
                                    <a class="hover:text-orange-500" href="#">Electronics</a>
                                </li>
                                <li>
                                    <a class="hover:text-orange-500" href="#">Accesories</a>
                                </li>
                                <li>
                                    <a class="hover:text-orange-500" href="#">Home Decor</a>
                                </li>
                                <li>
                                    <input type="text" placeholder='Search Here' className='border-white-9 text-black' />
                                </li>
                            </ul>
                        </div>
                    <div class="flex items-center gap-6 mr-10">
                            <button class="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-blue-500">Sign in</button>
                            <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
                    </div>
                    </nav>
                </header>

            </div>
            {data.length>0 && data.map((d)=>{
                return(
                    <div className='border-black border-2 flex justify-center items-center flex-col rounded-xl gap-3'>
                        <img className='h-56 w-48 mt-6 hover:scale-110 hover:translate-x-3 duration-300 ease-in cursor-pointer' src={d.image} alt="" />
                        <p className='w-64 text-center'> {d.id}. {d.title}</p>
                        <h1 className='font-bold underline underline-offset-2 '>Price: ₹{d.price}</h1>
                        <button className='py-2 px-5 mb-3 bg-orange-500 text-white rounded-2xl outline-2 ring-2 hover:ring-black hover:text-white hover:bg-black '>
                            Buy Now</button>
                    </div>
                )
            })}
        </div>
        
    )
}
export default App










// import {useState,useEffect} from 'react'


// const App = () =>{
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products')
//         .then((res)=>res.json())
//         .then(d=>setData(d))
    
//     }, );

//     return(
        
//         <div className='h-auto w-auto flex flex-wrap gap-8 justify-center mt-10' >
//             {data.length>0 && data.map((d)=>{
//                 return(
//                     <div className='border-black border-2 flex justify-center items-center flex-col rounded-xl gap-3'>
//                         <img className='h-56 w-48 mt-6 hover:scale-110 hover:translate-x-3 duration-300 ease-in cursor-pointer' src={d.image} alt="" />
//                         <p className='w-64 text-center'> {d.id}. {d.title}</p>
//                         <h1 className='font-bold underline underline-offset-2 '>Price: ₹{d.price}</h1>
//                         <button className='py-2 px-5 mb-3 bg-orange-500 text-white rounded-2xl outline-2 ring-2 hover:ring-black hover:text-white hover:bg-black '>
//                             Buy Now</button>
//                     </div>
//                 )
//             })}
//         </div>
        
//     )
// }
// export default App
