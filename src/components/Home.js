import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
          title='Model S'
          description='Order Online for touchless delivery'
          backgroundImg='model-s.jpg'
          leftBtnText= 'custom order'
          rightBtnText='Existing Inventory'
        />
        <Section
          title='Model 3'
          description='Order Online for touchless delivery'
          backgroundImg='model-3.jpg'
          leftBtnText= 'custom order'
          rightBtnText='Existing Inventory'
          />
        <Section
          title='Model X'
          description='Order Online for touchless delivery'
          backgroundImg='model-x.jpg'
          leftBtnText= 'custom order'
          rightBtnText='Existing Inventory'
        />
        <Section
          title='Model Y'
          description='Order Online for touchless delivery'
          backgroundImg='model-y.jpg'
          leftBtnText= 'custom order'
          rightBtnText='Existing Inventory'
        />
        <Section
          title='Low Cost Solar Panels'
          description='Money-Back Gaurantee'
          backgroundImg='solar-panel.jpg'
          leftBtnText= 'order now'
          rightBtnText='Learn More'
        />
        <Section
          title='Solar for New Roofs'
          description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
          backgroundImg='solar-roof.jpg'
          leftBtnText= 'order now'  
          rightBtnText='Learn More'
        />
        <Section
          title='Accessories'
          description=''
          backgroundImg='accessories.jpg'
          leftBtnText= 'order now'
        />
        <Button>
          <h1>Go To Real Tesla Website</h1>
        <form>
          <button className='real-tesla' formaction="https://www.tesla.com/" >Click To Compare</button>
        </form>
        </Button>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
const Button = styled.div`
  width: 100%;
  height: 50vh;
  background: lightyellow;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > h1{
      margin-bottom: 20px;
  } 
  > form .real-tesla{
    font-weight: 600;
    width: 256px;
    height: 40px;
    color: black;
    border-radius: 100px;
    text-transform: uppercase;
    opacity: 0.85;
    border: 2px solid black;
    cursor: pointer;

      &:hover{
        color: coral;
      }
  }
    
`