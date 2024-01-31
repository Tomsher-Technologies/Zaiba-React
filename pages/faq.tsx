import React, { FC } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import withMainLayout from '@/hocs/withMainLayout';
import Link from 'next/link';

const Faq: FC = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <>
            <section className="zb-inner-strip">
                <div className="container-fluid px-7">
                    <div className="grid grid-cols-2">
                        <h4>FAQ</h4>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <a href="product-listing.html">Jewellery</a>
                            </li>
                            <li>
                                <a href="product-listing.html">Rings</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="faq-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <img src="/images/join-bg.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className='space-y-3'>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon className='w-[32px] h-[32px]' />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography className={`py-3 ${expanded === 'panel1' ? 'text-blue-600' : ''} `} sx={{ flexShrink: 0 }}>
                                        How should I clean my jewelry?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="accordion-body">
                                            <strong>This is the first item&lsquo;s accordion body.</strong> It
                                            is shown by default, until the collapse plugin adds the
                                            appropriate classes that we use to style each element. These
                                            classes control the overall appearance, as well as the showing
                                            and hiding via CSS transitions. You can modify any of this
                                            with custom CSS or overriding our default variables. It&lsquo;s also
                                            worth noting that just about any HTML can go within the{" "}
                                            <code>.accordion-body</code>, though the transition does limit
                                            overflow.
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon className='w-[32px] h-[32px]' />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography className={`py-3 ${expanded === 'panel2' ? 'text-blue-600' : ''} `} sx={{ flexShrink: 0 }}> How do I store my jewelry to prevent tarnish?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <strong>This is the second item&lsquo;s accordion body.</strong> It
                                        is hidden by default, until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the showing
                                        and hiding via CSS transitions. You can modify any of this
                                        with custom CSS or overriding our default variables. It&lsquo;s also
                                        worth noting that just about any HTML can go within the{" "}
                                        <code>.accordion-body</code>, though the transition does limit
                                        overflow.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon className='w-[32px] h-[32px]' />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <Typography className={`py-3 ${expanded === 'panel3' ? 'text-blue-600' : ''} `} sx={{ flexShrink: 0 }}>
                                        Can I wear jewelry in the shower or while swimming?
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <strong>This is the third item&lsquo;s accordion body.</strong> It
                                        is hidden by default, until the collapse plugin adds the
                                        appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the showing
                                        and hiding via CSS transitions. You can modify any of this
                                        with custom CSS or overriding our default variables. It&lsquo;s also
                                        worth noting that just about any HTML can go within the{" "}
                                        <code>.accordion-body</code>, though the transition does limit
                                        overflow.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default withMainLayout(Faq);