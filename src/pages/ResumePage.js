import {
  ReferenceImage,
  ResumeContentDiv,
  ResumeSectionDiv,
  ResumeStyledChapter,
  ResumeStyledUnderTitle,
  ResumeStyledTitle,
  UniversityImage,
  WorkImage,
  ResumeContentSectionDiv,
  ResumeStyledDescription,
  ResumeStyledDate,
} from "./resumePage/ResumePageStyles";

export default function ResumePage() {
  return (
    <ResumeContentDiv>
      <ResumeStyledTitle>Resume</ResumeStyledTitle>
      {/* Work */}
      <ResumeSectionDiv>
        <WorkImage size={"20px"}></WorkImage>
        <ResumeStyledChapter>Work Experience</ResumeStyledChapter>
      </ResumeSectionDiv>

      
      <ResumeContentSectionDiv>
      <ResumeStyledUnderTitle>A7 Print - Bergen</ResumeStyledUnderTitle>
      <ResumeStyledDescription>
        Kundebehandling gjennom epost, telefon og personlig. <br/>
        Digital ferdigstilling og klargjøring til print. Digital print og kopi. <br/>
        Ferdigjøring av print(skjæring, falsing, bretting, bokbinding, hulling, rilling). <br/>
        Kalibrering, påfyll, tømming og kvalitetskontroll på kopimaskinene. Utsending av post. <br/>
        Sjåfør når det var nødvendig.
        </ResumeStyledDescription>
      <ResumeStyledDate>Januar 2016 - Juli 2017</ResumeStyledDate>
      </ResumeContentSectionDiv>
      
      <ResumeContentSectionDiv>
      <ResumeStyledUnderTitle>Ålesund Catering - Ålesund</ResumeStyledUnderTitle>
      <ResumeStyledDescription>Assisterende kokk, montering av plater. servitør og sjåfør. </ResumeStyledDescription>
      <ResumeStyledDate>August 2017 - Juli 2018</ResumeStyledDate>
      </ResumeContentSectionDiv>


      {/* Education */}
      <ResumeSectionDiv>
        <UniversityImage size={"20px"}></UniversityImage>
        <ResumeStyledChapter>Education</ResumeStyledChapter>
      </ResumeSectionDiv>

      <ResumeContentSectionDiv>
      <ResumeStyledUnderTitle>NTNU Ålesund</ResumeStyledUnderTitle>
      <ResumeStyledDescription>Bachelor</ResumeStyledDescription>
      <ResumeStyledDescription>Dataingeniør</ResumeStyledDescription>
      <ResumeStyledDate>August 2016 - 2019</ResumeStyledDate>
      </ResumeContentSectionDiv>

      <ResumeContentSectionDiv>
      <ResumeStyledUnderTitle>Sonans privat gymnas Bergen</ResumeStyledUnderTitle>
      <ResumeStyledDescription>Forkurs ingeniør</ResumeStyledDescription>
      <ResumeStyledDescription>Matematikk: R1 og R2 Fysikk: FY1.</ResumeStyledDescription>
      <ResumeStyledDescription>August 2013 - Juni 2014</ResumeStyledDescription>
      </ResumeContentSectionDiv>

      <ResumeContentSectionDiv>
      <ResumeStyledUnderTitle> Årstad videregående skole Bergen</ResumeStyledUnderTitle>
      <ResumeStyledDescription>Allmenn påbygg</ResumeStyledDescription>
      <ResumeStyledDescription>August 2012 - Juni 2013</ResumeStyledDescription>
      </ResumeContentSectionDiv>

      <ResumeContentSectionDiv>
      <ResumeStyledUnderTitle> Årstad videregående skole Bergen</ResumeStyledUnderTitle>
      <ResumeStyledDescription>PIN (Produksjons- og industriteknikk)</ResumeStyledDescription>
      <ResumeStyledDescription>Juni 2011 - August 2012</ResumeStyledDescription>
      </ResumeContentSectionDiv>

      <ResumeContentSectionDiv>
      <ResumeStyledUnderTitle> Årstad videregående skole Bergen</ResumeStyledUnderTitle>
      <ResumeStyledDescription>TIP (Teknikk og industriell produksjon)</ResumeStyledDescription>
      <ResumeStyledDescription>Juni 2010 - August 2011</ResumeStyledDescription>
      </ResumeContentSectionDiv>

{/*       
      <ResumeSectionDiv>
        <ReferenceImage size={"20px"}></ReferenceImage>
        <ResumeStyledChapter>Reference</ResumeStyledChapter>{" "}
      </ResumeSectionDiv>
      <ResumeStyledUnderTitle>this is some reference right here</ResumeStyledUnderTitle>
      */}

    </ResumeContentDiv> 
  );
  
}
