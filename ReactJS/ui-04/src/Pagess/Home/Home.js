import './Home.css';
import Header from '../../PageCompontDay7/Header/Header';
import Footear from '../../PagessCompents/Footear/Footear'

const Home =()=>{

    const name = 'DEVELOPER GURU'
    const name1 ='Coder'
    const name2=['HTML','CSS','JS','Bootstrap','ReactJs','NodeJs']
    return<>
    <div>
       <Header name={name}  name1={name1} name2={name2}/>
    </div>
    <div className='bodysection'>This is Home page</div>

    <div>
        <Footear/>
    </div>
    </>
}
export default Home;