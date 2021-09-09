function solution(s) {
    s = s.split(' ');
    
    for (let i=0; i<s.length; i++){
        s[i] = s[i].toLowerCase();
        s[i] = s[i].split('');
        
        if (typeof s[i][0] === 'string')
            s[i][0] = s[i][0].toUpperCase();
        
        s[i] = s[i].join('');
    }
    s = s.join(' ');
    
    return s;
}
