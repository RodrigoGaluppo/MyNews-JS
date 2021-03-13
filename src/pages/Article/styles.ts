import styled from "styled-components"

export const Container = styled.div`
    height:92vh;
    scroll-behavior:smooth;
    overflow-y:auto;
    padding: 0px 2%;
`
export const Text = styled.div`
    margin: 0 auto;
    padding: 0 2%;

    h1{ 
        color:#323232;
        margin-top:20px;
        font-size:30px;
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


export const Article = styled.article`
    width:100%;
    height:100%;
    max-width:900px;
    margin:0 auto;
    main{
        padding-bottom:30px;
        h1{ 
            color:#323232;
            margin:10px 0 20px 0;
            font-size:32px;
        }
        strong{
            text-align:left;
            font-style:italic;
            font-size:19px;
        }
        p{
            margin-top:15px;  
            text-align:justify;
            font-size:19px;
            max-width:100%;
            white-space: pre-wrap;
        }
        .source{
            max-width:100%;
           

            p{font-size:22px;}
            a{
                width:100%;
                text-decoration:none;
                span{width:100%;}
            }
        }
        span{
            margin-top:5px;
            font-size:18px;
            color:#04D361;
            font-style:italic;
        }
        .img{
            max-width:100%;
            height:100%;
            
            img{
                width:100%;
                min-height:250px;
                object-fit:cover;
            }
        }
    }

`