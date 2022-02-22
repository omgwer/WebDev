PROGRAM PrintHello(INPUT, OUTPUT);
USES Dos;

BEGIN {PrintHello}
  WRITELN('Content-Type: text/plain');
  WRITELN;    
  IF (GetEnv('QUERY_STRING')) = 'lanterns=1'
  THEN
    WRITELN('SARAH_1')
  ELSE 
    IF (GetEnv('QUERY_STRING')) = 'lanterns=2'
    THEN
      WRITELN('SARAH_2')
    ELSE 
      IF (GetEnv('QUERY_STRING')) = 'lanterns=3'
      THEN
        WRITELN('SARAH DIDNT SAY')
      ELSE
        WRITELN('INCORRECT INPUT')
  
  
  END. {PrintHello}
