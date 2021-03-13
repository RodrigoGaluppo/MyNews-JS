import styled from "styled-components"

export const Container = styled.div`
    height:92vh;
    scroll-behavior:smooth;
    overflow-y:auto;
    padding: 0px 2%;
`
export const Search = styled.div`
    max-width:600px;
    width:100%;
    
    margin: 30px auto;
    h1{
        margin-top:5px;
        font-size:22px;
        >strong{
            color:#04D361
        }
    }
    form{
        margin-top:15px;
        width:100%;
        
        > div{
            width:100%;
            height:100%;
        }
    }
`
export const Text = styled.div`
    width:100%;
    margin: 0 auto;
    
    max-width:600px;
    p{
        color:#323232;
        padding-left:1%;
        margin-top:10px;
        font-size:18px;
        font-style:italic;
    }
    h1{ 
        
        color:#323232;
        margin-top:20px;
        font-size:26px;
    }
`
export const Info = styled.header`
    background-color:#323232;
    width:100%;
    padding: 20px 2%;
    .container{
        
        align-items:center;
        color:white;
        width:90%;
        margin:0 auto;
        a{
            text-decoration:none;
            color:white;
            > span{
                svg{
                    color:white;
                }
            }
            h1{
                text-align:left;
                display:inline-block;
                
                font-size:26px;
                >strong{
                    
                    color:#04D361
                }
            }
            p{
                margin-top:10px;
                font-size:16px;
                >strong{
                    color:#04D361;
                }
            }
        }
        
    }
    
`
