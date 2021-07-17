import React from 'react'
import Card from './Card'

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
           <Card cardTitle="Orange" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Pear" cardImage = "https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
           <Card cardTitle="Guava" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Apple" cardImage = "https://images.pexels.com/photos/3258159/pexels-photo-3258159.jpeg?cs=srgb&dl=pexels-harshi-rateria-3258159.jpg&fm=jpg"/>
           <Card cardTitle="Mango" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
           buttonText="Pineapple" cardImage = "https://images.pexels.com/photos/3652898/pexels-photo-3652898.jpeg?cs=srgb&dl=pexels-juan-c-palacios-3652898.jpg&fm=jpg" />
           

           
        </div>
      </div>
    </section>
  )
}
export default CardSection