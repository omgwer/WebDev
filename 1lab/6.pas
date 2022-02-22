PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES Dos;

FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  Ch: CHAR;
  InputString, ReturnText, KeyM: String;
  Index, Count: Integer;

BEGIN      
  InputString := GetEnv('QUERY_STRING');
  KeyM := Key + '=';

  Index := Pos(KeyM, InputString); {место первого символа в KEY}
  IF Index <> 0
  THEN
    BEGIN
      delete(InputString, 0, Index);  {удаляем все до KEY} 
      Count := Length(KeyM) + 1;
      Index := Pos('&', InputString); {получаем место начала нового параметра}
      IF Index = 0
      THEN
        BEGIN
          Index := Length(InputString) + 1;
        END;      

      GetQueryStringParameter := Copy(InputString, Count, Index - Count);
    END
  ELSE
    GetQueryStringParameter := '';
END;

BEGIN {WorkWithQueryString}
  WRITELN('Content-Type: text/plain');
  WRITELN;  

  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))  
  
  END. {WorkWithQueryString}
