let Action=["https://flxt.tmsimg.com/assets/p16763508_b_v13_ab.jpg","https://m.media-amazon.com/images/M/MV5BNTkwOTE1ZDYtODQ3Yy00YTYwLTg0YWQtYmVkNmFjNGZlYmRiXkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_.jpg","https://sportshub.cbsistatic.com/i/2022/02/01/901bdd4c-62bb-4566-81fd-6861fed12f91/wandavision-shattered-reality-poster.jpg?auto=webp&width=854&height=1139&crop=0.75:1,smart"];
console.log(Action);
let Cartoon=["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/00064507-48e1-452b-8956-d0698a06942d/df7eplj-223dae04-47c5-470d-b557-bdb6828031d7.png/v1/fill/w_1280,h_720,q_80,strp/gravity_falls_10_year_anniversary_by_jtom09_df7eplj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMDAwNjQ1MDctNDhlMS00NTJiLTg5NTYtZDA2OThhMDY5NDJkXC9kZjdlcGxqLTIyM2RhZTA0LTQ3YzUtNDcwZC1iNTU3LWJkYjY4MjgwMzFkNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.rZyMYwnM9ihL-kG0p6RtqwzUy9qQbJzhg2fkjKqWHHA","https://i.insider.com/54f62b896da8119338df0cf4?width=750&format=jpeg&auto=webp","https://saintscroll.com/wp-content/uploads/2022/04/review_turning_red-900x506.jpg"];
console.log(Cartoon);
let Adventure=["https://filmcellsltd.com/imagehttps://i.insider.com/54f62b896da8119338df0cf4?width=750&format=jpeg&auto=webps/products/detail/MP17240699HarryPotter20thAnniversary-SorcerersStoneMightyPrint.jpg","https://play-lh.googleusercontent.com/k20SLgBYYou445TeVz8oWo-ba7rifGOVYeghk8MqrLbbQCS5SK9yQ4J5DQlEaVYGAK0=w240-h480-rw","https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_.jpg"];
console.log(Adventure);
let result=document.querySelector(".result");
let submitButton=document.querySelector(".b1");
submitButton.onclick=function(){
    let input1=document.querySelector(".I1").value;
 if(input1==="Action" )
     { for(let A of Action)
    {let img = "<img src=" + A + ">";
   result.insertAdjacentHTML("beforeend", img);}}
    else if (input1==="Cartoon" )
     { for(let C of  Cartoon)
    {let img = "<img src=" + C + ">";
   result.insertAdjacentHTML("beforeend", img);}}
        else if (input1==="Adventure" )
     { for(let AD of Adventure)
    {let img = "<img src=" + AD+ ">";
   result.insertAdjacentHTML("beforeend", img);}}
};
let suggestButton=document.querySelector(".b2");
suggestButton.onclick=function(){
    let input2=document.querySelector(".I2").value;
    Action.push(input2);
    let img = "<img src=" + input2 + ">";
   result.insertAdjacentHTML("beforeend", img);
};
