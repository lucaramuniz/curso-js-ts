/*
Operadores Lógicos

&& - AND - E   - Todas expressões verdadeiras retornam verdadeiras
|| - OR  - OU  - Todas expressões verdadeiras OU falsas retornam verdadeiras uma verdadeira OU falsa;
!  - NOT - NÃO - Todas expressões verdadeiras são negadas retornando falsas (conversão)
*/
//AND
console.log(true && true && true && true); //true
//OR
console.log(true || false || false || false); //true
//NOT
console.log(!false); //converte a true afirmando ser verdade o False
console.log(!!false); //retorna a false, anulando o true original, afirmando ser falso o False
