import { Card } from "./componentsStyled/Card.styled"
import { Wrapper } from "./componentsStyled/Wrapper.styled";
//@ts-ignore
import image from './assets/images/0cbd17e4381497547009ce81acc4eee3.jpg';
import { Button } from "./componentsStyled/Button.styled";


export const App = () => {
  return <Wrapper>
    <Card key={1}>
      <img src={image} alt={image} />
      <h2>Headline</h2>
      <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
      <Button>See more</Button> <Button  color={'red'}  $isFilling={true} >Save</Button>
      
    </Card>
    <Card key={2}>
      <img src={image} alt={image} />
      <h2>Headline</h2>
      <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
      <Button>See more</Button> <Button /* color={'red'} */ $isFilling={true} >Save</Button>
      
    </Card>
    <Card key={3}>
      <img src={image} alt={image} />
      <h2>Headline</h2>
      <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
      <Button>See more</Button> <Button  /* color={'red'} */ $isFilling={true} >Save</Button>
      
    </Card>

  </Wrapper>

}

