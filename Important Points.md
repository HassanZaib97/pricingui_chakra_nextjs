--Pricing UI using Chakra

> Chakra UI Command: npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
> https://chakra-ui.com/getting-started/nextjs-guide is website se chakra ki guide phar rahay hain.
> layout.tsx file ma import globals.css ko comment kr dia wrna ye override krta rehta.
> Phr hm ne page.tsx se sara code hata kr "use client" ki line likhi q k chakra ui ke liye "use client" likhna
    pahrta ha.
> phr hm ne import kia :
    import { ChakraProvider } from "@chakra-ui/react"
> Aur phr function banaya jis ma return ma <ChakraProvider></ChakraProvider> likha is tag ke ander hm apna code likhain
    ge.
> ChakraUI ko component libraby kehtay ha q k is ne <h1><h2> tag ko mila kr ek <Heading> componet de dia aur
    <p> ki jaga <text> component de dia.
> aur jo component hm use karain ge wo import bhi hoga. aur hm <h1><p> ye tag bhi use kr saktay hain Chakra ke ander.
> hm <Heading as="h1"></Heading> hm is tarah heading ke component ma bata saktay ha ke konsa heading styles chaye
    (as) prop  laga kr q k chakra ka default <Heading>Hi</Heading> ye wala h2 heading ha to hm (as prop) ki
    madat se apni marzi ka heading style likh saktay ha. aur color font etc sb de saktay hain. jese
    <Heading as="h1" color={"blue"} fontSize="48px">Hi</Heading> ye sari cheezain html ma <h1 style={{color: "blue"}}>
    hi</h1> hm is tarah style ke ander detay hain.
> lazmi nahi ha ke (as prop) laga kr color fontSize likhna hoga (as prop) sirf heading select krnay ke liye ha
    baki color fontSize etc hm direct likh saktay ha (as) ke bagair
> ye sara hm ne smjnhay ke liye kiya ab hm isay alag component ma daal de ge ta ke apna poject start karain.
> hm ne ye sara code cut kr ke component ke folder ke ander practice.tsx file ma daal dia.
> agr check krna ha to ye practice.tsx ki file ka code app directory ki page.tsx ma daal kr check kr saktay hain.
> ab hm apna project start krtay ha hm apnay pricing ui ke page k 3 hiso ma break karain ge 1) Purple wala area,
    2) nechay while wala area aur 3) Box jo ha.
> hm ne Header ka component banaya aur us ma apna Purple wala area cover karain ge.
> Hr ek cheez box ha mtlb alag <div> ha. matlab hm ne apnay page ke components ko boxes ma divide kr dia. ke hr 
    component ek box ha.
> ab hm ne Header component ma apna code likhna start kia <Box></Box> ke ander
> textAlign is a property in Chakra UI, a React UI library, used to align text horizontally within a container. The
    possible values are left, center, right, and justify.
> hm ne box ko align kia aur color dia. color hight etc ye sb hm figma ma dekh rahy ha figma ma purple box ko 
    select kr ke us ke inspect ma ye details hain. 
    link: https://www.figma.com/file/2UvLO274B9TNdsChCIC0hi/Pricing-UI?node-id=2%3A9&t=dCnPNFDYIInJcrxa-0
> chakra ma padding ki jaga p property use hogi aur pt matlb padding top. aur padding mtlb ander ka space aur 
    margin matlb bahir ka space.
> hamara Header component complete ab hm pricing component banaya pricing.tsx
> ab pricing ke box ke andr multiple boxes hain to hm multiple box ke tags ma kaam karay ge. ye boxes aese hi
    hain jese hm <div></div> ke tag ma kaam krtay hain
> lekin hm ne phele practice.tsx component ma practice kr ke dekha ke Display Flex kese kaam krta ha.
> phele hm ne basic html and css use kari ta ke pata chalay ke CSS ma kese flex box banay ga aur chakra ma kese.
> CSS ma flex boxes ke liye styles={{display: "flex"}} is tarah row ma a jaye ge aur agr dobara nechay chaye
    column ma to {{display: "flex", flexDirection: "column"}} is se nechay a jaye ge dobara
> justifContect ki property se CSS ma hm location pe kaam kr saktay ha ke hamary boxes ki locations kesi ho,
 aur wo row axis ma chnage ho gi
> isi tarah column axis ke liye alignItems ki property use ki ha.
> ab hm apnay project pr a jatay ha aur waha pr dekhtay ha ke Display Flex Chakra ma kese kaam karay ga.
> hm chakra ma <flex></flex> component ke andr likhtay ha Display Flex ke liye.
> phr <flex> ke andr <Box> ke andr, q k <box> hamara div ka kaam krta ha chakra ma to <Box> ke andr <Text></Text>
    ke component ke ander kuch styling di aur apna text likha, isi tarah phr Heading likhi phr Button dia.
>  phr hm ne lef box ma padding di p="60px" khali p se top bottom right left sb ma padding aplly hogi.
> phr hm ne left box pe textAlign ki property di center ki ta ke sara text center wise hojaye.
> ab right box ki bari.
> HStack is a component in Chakra UI, a React UI library, used for stacking elements horizontally. It is used to
    arrange elements in a horizontal row. The HStack component acts as a container and provides a convenient way
    to manage the layout and spacing between elements in a horizontal direction.
> ab yaha pr hm ne mark sign ke sath text likhna ha to mark ke icons ke liye hm app directory ma icon folder
    bana kr us ma checkMarkicon.tsx ma icons banaye ke coding se.
> hm ne figma walay page se hi icons ka code copy paste krana ha checkMarkicon.tsx ma.
> copy svg karay ge puray group ko yaha pr mene group 172 ko copy kia as svg aur paste kr dia function bana kr
    return ma.
> svg = scalabe vector graphic, jo image phati nahi ha jese pixle wali image ke resolution phatnay lag jatay hain,
    to svg ke pixles nahi phatay jese coral draw OR Photoshop aur svg ma hum colors bhi change kr saktay hain.
> Phr hm pricing wali file ma ge aur waha Icon component import kia aur <HStack> tag ke andr <Icon as={checkMarkicon}/>
    likh dia aur Text component se uper likhain ge to start ma Tick mark aye ga, Text compnent se nechay likhain
    ge to end ma aye ga.
> agr ma HStack component hata dain ge to Tick Mark uper aye ga hamary text ke uper. to HStack ki waja se hm
    horizontal ma krtay hain.
>  HStack pe hm ne margin bottom dia sb ma ta ke spacing a jaye.
> phr hm ne <Box> container jo ha, parent jo ha us ma ye likha <Box width={"850px"} mx="auto"> ta ke center ma 
    ho jaye pora box.
> mx is a shorthand property in Chakra UI, a React UI library, for setting the margin-left and margin-right properties
    at once. It can be used to control the horizontal margin of an element.
    For example, mx="4" sets both the margin-left and margin-right to 4 units. This can be useful for quickly adjusting
    the horizontal margin of an element without having to set each property separately.
> hm ne parent box mtlb container box ke ander yelikha:
    <Box 
        width={"850px"}
        mx="auto"
        mt="-150px"
        bg="white"
        shadow={'dark-lg'}
        borderRadius="2xl"
        overflow={"hidden"}
        >
    is ma width se box ka width extend howa (box ki chorai) aur mx auto se center pe aya aur mt= "-150px" se margin
    km howa top se agr plus ma likhtay to aur nechay chala jata box hmain uper lana tha is liye margin km kiya
    minus laga kr. phr hm ne shadow dia ta ke wazeh nazar aye, phr borderRadius se corners round kiye lekin is
    right 2 corner rounder howay left corners ke liye overflow="hidden" kia to tb howay.
> yaha pr hamara pricing component bhu complete.
> ab hm Features.tsx file banaye ge components folder ma.
> aur jis tarah phle svg copy paste kia tha yaha pr bhi last ke jo 3 icons ha un ki alag alag file bana kr
    un ke svg code ko paste krna ha jis tarah phele kia tha group ke sath.
> phr un sb ko import kia Features.tsx ke andr. HStack Icon Text ke sath jis tarah phele kiya tha. HStack se
    ek hi line ma sb aye ga jese Icon bhi aur Text bhi
> phr un ko sb ek parent component <Flex> ma wrap kia tha ke sb line se aye abhi sb column ki tarah a rahy ha.
> textAlign sirf text ke liye use hota ha text ke ilawa agr kisi cheez ko center krna ha to width aur margin auto
    se hota ha.
> phr hm ne box ma kuch changes ki <Box width={"800px"} m="auto" mt={"20px"}> is se width(chorai) zada hogai
    aur margin auto se center ma hogia aur mt se thora top margin dia.
> yaha pr hamari website ki UI complete hogai ab Mobile ki krni ha
> mobile view pe hamara pricing wala box masla kr raha tha chota nahi ho raha tha to hm ne width ki jaga
    maxW kr dia aur mx ma kuch changes ki:
     <Box 
        maxW={"850px"}
        mx={{base: "20px", md: "auto", lg: "auto"}}
        mt="-170px"
        bg="white"
        shadow={'2xl'}
        borderRadius="2xl"
        overflow={"hidden"}
        
        >
> isi tarah features.tsx ma bhi last line masla kr rahi thi to us ki width bhi change ki:
    <Box maxW={"800px"} m="auto" mt={"20px"}> maxW kr dia.
> hamray pass 3 cheezain hoti ha base md and lg 3 se zada bhi hoti ha lekin abhi ke liye ye 3.
> is ke ilawa sm, xsm, xl, xxl ye devices ke sizes hain
> base hamara mobile ke liye use hota ha.
> to ab hm in ko set karain ge ke tamam screen ma sahi se UI aye.
> sb se phele Header.tsx ma jaye ga waha pr Box ma phele ye code likha tha:
    <Box textAlign={"center"} bg="#6846C1" pt="88.45px" pb="198" color="white">
    ab ye kr diya ta ke base(mobile), md(tablets etc jo medium screens ha ) aur lg(large screens):
    <Box textAlign={{base:"left", md: "center", lg: "center" }} pl="15px" bg="#6846C1" pt="88.45px" pb="198" color="white">
    is ma textAlign ma double curly brakets ha q k jb hm zada property dain ge object ki tarah dain ge.
    aur is ma ek padding left bhi thora add kia tha ke mobile view ma thora space aye left se.
> phr isi tarah hm ne jo Flex ha us ko change kia:
    <Flex direction={{base: "column", md: "row", lg: "row"}}>
> ab Features.tsx ma Flex ma direction deni ha:
    <Flex direction={{base: "column", md: "row", lg: "row"}}>
> <HStack mb="20px"> diya ta ke mobile view ma margin bottom aye. 3no HStack ma diya.
> Phr Vercel ma deploy kiya.