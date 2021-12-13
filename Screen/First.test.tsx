import axios from "axios";
import * as  React from "react";
import {create,act} from "react-test-renderer";
import First from "./First";
jest.useFakeTimers()


// const navigation ={
//     navigate:jest.fn()
// }
// const tree = create(<First navigation={navigation} />)

// test('Navigate To detail Screen', () => {
//         const btn = tree.root.findByProps({testID:"btn_navigate"}).props;
//         btn.onPress();
    
//         expect(navigation.navigate).toBeCalledWith('Second');
//     })
    
const tree = create(<First navigation={undefined} />)

test("Component  Check",()=>{
    let txtinput = tree.root.findByProps({testID:"txt_search"}).props;
    let Title = tree.root.findByProps({testID:"Title"}).props;
    let flt_data = tree.root.findByProps({testID:"flt_data"}).props;
    let btn_search = tree.root.findByProps({testID:"btn_search"}).props;

    expect(txtinput).toBeDefined();
    expect(Title).toBeDefined();
    expect(flt_data).toBeDefined();
    expect(btn_search).toBeDefined();
})

test("Title Test",()=>{
    let titu = tree.root.findByProps({testID:"Title"}).props;
    expect(titu.children).toBe("facebook / react")
    
})

test("First Api testing",async()=>{
    await axios
      .get("https://api.github.com/repos/facebook/react/issues")
      .then((response) => {
          
            expect(response.data).not.toBeNull();
        
      });
      
})

test("Second Api testing",async()=>{
    await axios
      .get("https://api.github.com/repos/facebook/react/issues/22879")
      .then((response) => {
        
            expect(response.data).not.toBeNull();
        
      }).catch((e)=>console.log(e)
      )
      
      
      
})

test("Search Data Test",()=>{

    let txtinput = tree.root.findByProps({testID:"txt_search"}).props;
    let btn_search = tree.root.findByProps({testID:"btn_search"}).props;
    txtinput.value  = "Fea";
    act(()=>btn_search.onPress())
    let flt_data = tree.root.findByProps({testID:"flt_data_search"}).props;
    expect(flt_data.data).not.toBeNull();
    console.log(flt_data.children);
    
    
})

test("Second Page Data of ID:#22879",async()=>{

    await axios
    .get("https://api.github.com/repos/facebook/react/issues/22879")
    .then((response) => {
      
          expect(response.data.user.login).toBe("zposten");
      
    });
})