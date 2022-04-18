import React from 'react'
import {Link} from "react-router-dom"

const About = () => {
  return (
    <div className="container bg-light mt-3 p-5 mb-5" style={{ width: "150vh" , height:"auto" }}>
      <div className="row">
        <div className="col-sm-12">
          <h3>Lorem ipsum dolor sit amet</h3>&nbsp;
          <h5>Lorem</h5>&nbsp;
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>&nbsp;
          <p>Morbi leo urna molestie at. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Venenatis a condimentum vitae sapien pellentesque. Lorem dolor sed viverra ipsum. Urna neque viverra justo nec. Integer eget aliquet nibh praesent tristique magna sit. </p>&nbsp;
          <p>Lorem ipsum. </p>&nbsp;
          <p>Augue neque gravida in fermentum. Lobortis mattis aliquam faucibus purus in massa tempor. Purus sit amet luctus venenatis lectus magna.Volutpat lacus laoreet non curabitur gravida arcu. Feugiat scelerisque varius morbi enim nunc faucibus a. </p>&nbsp;
          <p>Sit amet massa vitae tortor condimentum lacinia quis vel eros. Sed velit dignissim sodales ut eu. Sit amet dictum sit amet justo donec enim.</p>&nbsp;
          <p>Lorem; <strong> Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. </strong> </p>&nbsp;
          <p>Cum sociis natoque penatibus et magnis. Risus ultricies tristique nulla aliquet. Ornare massa eget egestas purus viverra accumsan in nisl. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Fermentum dui faucibus in ornare. Vestibulum sed arcu non odio euismod lacinia at quis risus. </p>&nbsp;
          <p>Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.</p>&nbsp;
          <p>Quis lectus nulla at volutpat diam ut venenatis. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. </p>&nbsp;
          <p>Arcu risus quis varius quam.</p>&nbsp;
          <p>Diam maecenas ultricies mi eget mauris. Viverra nibh cras pulvinar mattis. Congue eu consequat ac felis donec et odio. Ac tincidunt vitae semper quis lectus nulla. </p>&nbsp;
          <p>
            <Link onClick={() =>window.open("https://youtube.com")} className="text-dark " to="/about">Youtube Kanalımız</Link>
          </p>
          <figure className='text-center'>
          <img className='rounded' style={{ width: "200px", height: "200px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="..." />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default About