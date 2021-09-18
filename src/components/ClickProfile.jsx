import React from 'react'
import { Box ,Image,Input} from '@chakra-ui/react'

import {BiSort} from 'react-icons/bi'
import {FaFilter} from 'react-icons/fa'
import imageLogo from '../assets/Rectangle 882.png'

function ClickProfile() {
    return (
        <>
           
            <Box width="90%" p="40px 30px" d="flex" flexDirection="row" alignItems="center" justifyContent="space-between">

                <Input form="text" placeholder="Search by name or Keyword" pl="30px"/>

                <Box position="absolute" >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 12.5C7.83123 12.4997 9.1241 12.0541 10.1728 11.234L13.4697 14.531L14.5303 13.4705L11.2333 10.1735C12.0538 9.12475 12.4997 7.83158 12.5 6.5C12.5 3.19175 9.80825 0.5 6.5 0.5C3.19175 0.5 0.5 3.19175 0.5 6.5C0.5 9.80825 3.19175 12.5 6.5 12.5ZM6.5 2C8.98175 2 11 4.01825 11 6.5C11 8.98175 8.98175 11 6.5 11C4.01825 11 2 8.98175 2 6.5C2 4.01825 4.01825 2 6.5 2Z" fill="#BDBDBD"/>
                    </svg>

                </Box>
                
              

                
               
            </Box>



           <Box d="flex" alignItems="center"  flexDirection="row" justifyContent="space-between" width="85%">
               <Box fontSize="16px" fontStyle="Lato" fontWeight="700" color=" #999999;" pl="30px">
                    4 results
               </Box>
               <Box d="flex" flexDirection="row" alignItems="center">
                    <Box d="flex" alignItems="center" flexDirection="row" color=" #999999;"  fontSize="16px" fontStyle="Lato" >
                        <BiSort/>
                        Sort : Newest
                    </Box>
                    <Box d="flex" alignItems="center" flexDirection="row"  pl="20px" color=" #999999;"  fontSize="16px" fontStyle="Lato" >
                        <FaFilter/>
                        <Box>Filter</Box>

                    </Box>

                </Box>

               

            </Box>

            <Box d="flex" flexDirection={{base:"row",md:"row"}} flexWrap={{base:"wrap",md:"wrap"}} width="90%">
                <Box  pl="26px" pt="33px" justifySelf={{base:"center",md:"center"}}>
                    <Image src={imageLogo} alt="brand-logo" />
                    <Box>
                        <Box fontSize="12px" color="#33333;" fontStyle="Lato" fontWeight="700" pt="5px">IMG_20210826_135104.jpg</Box>
                        <Box fontSize="12px" color="#717171;" fontStyle="Lato" fontWeight="400" pt="5px">Aug 25th</Box>
                    </Box>
                    
                   
                </Box>
                <Box  pl="26px" pt="33px">
                    <Image src={imageLogo} alt="brand-logo"/>
                    <Box>
                        <Box fontSize="12px" color="#33333;" fontStyle="Lato" fontWeight="700">IMG_20210826_135104.jpg</Box>
                        <Box fontSize="12px" color="#717171;" fontStyle="Lato" fontWeight="400" pt="5px">Aug 25th</Box>
                    </Box>
                    
                   
                </Box>
                <Box  pl="26px" pt="33px">
                    <Image src={imageLogo} alt="brand-logo"/>
                    <Box>
                        <Box fontSize="12px" color="#33333;" fontStyle="Lato" fontWeight="700">IMG_20210826_135104.jpg</Box>
                        <Box fontSize="12px" color="#717171;" fontStyle="Lato" fontWeight="400" pt="5px">Aug 25th</Box>
                    </Box>
                    
                   
                </Box>
                <Box   pl="26px" pt="33px">
                    <Image src={imageLogo} alt="brand-logo"/>
                    <Box>
                        <Box fontSize="12px" color="#33333;" fontStyle="Lato" fontWeight="700">IMG_20210826_135104.jpg</Box>
                        <Box fontSize="12px" color="#717171;" fontStyle="Lato" fontWeight="400" pt="5px">Aug 25th</Box>
                    </Box>
                    
                   
                </Box>
                <Box  pl="26px" pt="33px">
                    <Image src={imageLogo} alt="brand-logo"/>
                    <Box>
                        <Box fontSize="12px" color="#33333;" fontStyle="Lato" fontWeight="700">IMG_20210826_135104.jpg</Box>
                        <Box fontSize="12px" color="#717171;" fontStyle="Lato" fontWeight="400" pt="5px">Aug 25th</Box>
                    </Box>
                    
                   
                </Box>
                <Box 
                    pl="26px" 
                    pt="33px">
                    <Image src={imageLogo} alt="brand-logo"/>
                    <Box 
                        fontSize="12px" 
                        color="#33333;" 
                        fontStyle="Lato" 
                        fontWeight="700">IMG_20210826_135104.jpg
                    </Box>
                    <Box 
                        fontSize="12px" 
                        color="#717171;" 
                        fontStyle="Lato" 
                        fontWeight="400" 
                        pt="5px">Aug 25th
                    </Box>
                    
                   
                </Box>

                

                
            </Box>




            
            
        </>
    )
}

export default ClickProfile
