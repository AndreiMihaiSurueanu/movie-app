import styled from 'styled-components'

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb 0.5s;

    :hover {
        opacity: 0.7;
    }

    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`;