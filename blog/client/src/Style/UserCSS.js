import styled from "@emotion/styled";

const LoginDiv = styled.div`
    width: 60%;
    max-width: 360px;
    margin: 0 auto;
    margin-top: 5rem;
    form{
        width: 70%;
        padding : 20px;
        box-shadow: 0px 19px 38px rgba(0,0,0,0.03),
        0px 15px 12px rgba(0,0,0,0.2);
        display: flex;
        flex-direction: column;
        label{
            font-weight: bold;
        }
        
        input{
            border-radius: 10px;
            border : 1px solid #c6c6c6;
            padding: 5px;
            margin-bottom: 10px;

            &:active,
            &focus {
                outline : none;
            }

            
        }
        button { 
            border-radius: 15px;
            padding: 5px 10px;
            background-color: black;
            color: white;
            border : 1px solid black;
            margin-top: 10px;
            &:hover {
                background-color: white;
                color :black;
                border: 1px solid black;
            }
        }
        span {
            text-align: center ;
            font-weight: bold;
            color:#ff4f4a;
            margin: 0 auto;
            margin-top: 5px;
            margin-bottom: 5px;

        }
        div{
            width: 90%;
            display: flex;
            flex-direction: row;
            align-items: center;
            


            input{
                max-width: 150px;
            }
    
            button{
                margin: 0 auto;
                margin-bottom: 10px;
                margin-left: 10px;

            }
        }
        @media (max-width : 756px){
            width: 80%;
        }
        @media (max-width: 480px) {
            /* Set a minimum width for the form */
            min-width: 280px;
        }
    }
`;


const NameDiv = styled.div`
   
    
`;


export { LoginDiv, NameDiv };