import BlogList from './BlogList';
import Create from './Create';
import useFetch from './useFetch';

//const Home = () => {

   // let name = 'Tejas';
  // const [name, setName] = useState('Tejas');
  // const [age, setAge] = useState(19);

//const handleClick = () => {
  //  setName('Teju');
  //  setAge(11);
// }


//    return (
      /*  <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}*/

const Home = () => {
   // const [blogs, setBlogs] = useState(null);
   // const [isPending, setIsPending] = useState(true);
   // const [error, setError] = useState(null);

   // const [name, setName] = useState('Tejas');

   // useEffect(() => {
   //     setTimeout(() => {
   //         fetch('http://localhost:8000/blogs')
   //     .then(res => {
   //         if(!res.ok){
   //             throw Error('could not fetch the data for that resource');
   //         }
   //         return res.json();
   //     })
   //     .then((data) => {
   //         setBlogs(data);
   //         setIsPending(false);
   //         setError(null);
   //     })
   //     .catch(err => {
   //         setError(err.message);
   //         setIsPending(false);
   //     })
   //     }, 1000);
   // },[]);

   const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    return (
        /*<div className="home">
           <BlogList blogs={blogs} title="All Blogs!"/>
           {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
           <button onClick={() => setName('Teju')}>Change name</button>
           <p>{ name }</p>
    </div>*/
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
           {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
           </div>
    );
}

export default Home;