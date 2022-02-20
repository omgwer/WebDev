PROGRAM PrintHello(INPUT, OUTPUT);
USES Dos;

VAR
  InputString, StopTrigger, Result, NameTrigger : String;
  Index, Count : Integer;

BEGIN {PrintHello}
  WRITELN('Content-Type: text/plain');
  WRITELN;

  InputString := GetEnv('QUERY_STRING');
  StopTrigger := '=';  
  Index := Pos(StopTrigger, InputString) + 1;
  Count := Length(InputString) - Index + 1;  
  Result := Copy(InputString, Index, Count);
  WRITELN(Result);
  NameTrigger := Copy(InputString, 1, 4); 
  

  IF NameTrigger = 'name'
  THEN
    WRITELN('Hello ', Result, ' !')
  ELSE
    WRITELN('Hello, Anonimus!')


  

  
  
  
  END. {PrintHello}
