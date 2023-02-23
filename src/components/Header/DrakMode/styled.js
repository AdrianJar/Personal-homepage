import styled from "styled-components";

export const DMWrapper = styled.div`
    width: 160px;
    height: 26px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    position: absolute;
    right: 0px;
    top: 0px;
`;

export const DMStatus = styled.p`
    width: 100px;
    height: 16px;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.3;
    text-transform: uppercase;
`;

export const DMButton = styled.button`
    display: flex;
    align-items: center;
    width: 48px;
    height: 26px;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.color.Text};
`;