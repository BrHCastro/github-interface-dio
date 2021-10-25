import styled from 'styled-components'
import { Tabs, Tab, TabPanel, TabList } from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
`

export const WrapperTabList: any = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display:flex;
    margin: 16px 0;
    gap: 4px;
`
WrapperTabList.tabsRole = 'TabList'

export const WrapperTab: any = styled(Tab)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: .2;
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
    transition: background .2s;
    gap: 4px;

    font-family: 'lato', sans-serif;
    font-weight: bold;
    background: #FFF;
    color: #57606a;
    
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    
    svg {
        width: 16px;
        height: 16px;
    }

    &:hover {
        background: #57606a;
        color: #FFF;
        
        svg path {
            fill: #FFF;
        }
    }

    &.is-selected {
        background: #57606a;
        color: #FFF;

        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        
        svg path {
            fill: #FFF;
        }
    }   
`
// WrapperTabList.tabsRole = 'Tab'

export const WrapperTabPanel: any = styled(TabPanel)`
    display: none;
    height: 40vh;
    padding: 8px;
    margin: -8px 4px 0;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background: #FFF;

    &.is-selected {
        display: block;
    }
`
// WrapperTabList.tabsRole = 'TabPanel'