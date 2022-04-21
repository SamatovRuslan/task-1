import CardLayout from "./CardLayout";
import Title from "./Title";



function Cards(props) {
    return <div>
        <Title/>
        <CardLayout className="cards">
        {props.items.map((item, index)=>{
            return <div key={index} className="card">
                <div style={{backgroundColor: `${item.wallpaper}`}} className='wallpaper'></div>
                <img src={item.profilePic} alt="" className="profile-pic"></img>
                <h1>{item.username}</h1>
                <p>About</p>
                <p>{item.userInfo}</p>
                <p><b>web: </b>https://phin.dev</p> 
                <p><b>twitter: </b>https://twitter.com.phin</p>              
            </div>
        })}
        </CardLayout>
    </div>
}

export default Cards;