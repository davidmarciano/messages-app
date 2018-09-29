import { injectGlobal } from 'styled-components';

injectGlobal`
    body
    {
        font-family:Sans-Serif;
        box-sizing:border-box;
        padding:0px;
        margin:0px;
        & *
        {
            box-sizing:border-box;
        }
        textarea, input {
            color:#505050;
            font-family:Sans-Serif;
            border:1px solid #c5c5c5;
            ::placeholder {
                color:#c5c5c5;
                opacity:1;
            }
            :-ms-input-placeholder {
                color:#c5c5c5;
            }
            ::-ms-input-placeholder {
                color:#c5c5c5;
            }               
        }
    }
`;