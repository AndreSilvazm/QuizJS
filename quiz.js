
    const pontuacao = []
    const confirmacao = []

    function pontuacao_iniciante(){
        
        //Fazendo a soma de dentro de confirmação para colocar o valor na pontuação la no level iniciante
        var soma_confirmacao = 0
        var soma_pontuacao = 0


        for(var i = 0; i< confirmacao.length; i++){

            soma_confirmacao += confirmacao[i]
            
            
            
            
        }



        //Fazendo agora a soma da pontuação para somar e colocar la no nosso span

        
        for(var p = 0; p < pontuacao.length; p++){

            soma_pontuacao += pontuacao[p]
        }

       
        
        if(soma_confirmacao == 4){

            var pontos = document.getElementById('valor-pontuação')
            
            
            pontos.innerText = soma_pontuacao
        }


        
    }

    function firstQuestion(){
    
        var fq = document.getElementsByName('question')
        var fqct = document.getElementById('fqc-true')
        var fqcw = document.getElementById('fqc-wrong')
        var fqcw1 = document.getElementById('fqc-wrong1')
        var btt = document.getElementById('button-for-display1')
    
    
        if(fq[0].checked){

            
            const confirma = confirmacao.push(1)
            const ponto = pontuacao.push(0)

            fqcw.style.background = 'red'
            
            fqcw1.style.background = 'white'
            fqct.style.background = 'white'
            btt.style.visibility = 'hidden'

            
            
            
            pontuacao_iniciante()
            
            
            
        }
        
        if(fq[1].checked){

            const confirma = confirmacao.push(1)
            const ponto = pontuacao.push(0)


            fqcw1.style.background = 'red'
            fqcw1.style.transition = 'ease all .2s'
    
            fqcw.style.background = 'white'
            fqct.style.background = 'white'
            btt.style.visibility = 'hidden'

            pontuacao_iniciante()
        }
        
        
        if(fq[2].checked){

            const confirma = confirmacao.push(1)
            const ponto = pontuacao.push(1)


            fqct.style.background = 'green'
            fqct.style.color = 'black'
            
            fqcw.style.background = 'white'
            fqcw.style.transition = 'ease all .2s'
            
            fqcw1.style.background = 'white'
            btt.style.visibility = 'hidden'

            pontuacao_iniciante()
            
        }
    
    }
    function secondQuestion(){
    
        var sq = document.getElementsByName('question2')
        var sqct = document.getElementById('sqct')
        var sqcw = document.getElementById('sqcw')
        var sqcw1 = document.getElementById('sqcw1')
        var btt = document.getElementById('button-for-display2')
    
        if(sq[0].checked){

            const confirma = confirmacao.push(1)
            const ponto = pontuacao.push(1)


            sqcw.style.background = 'white'
            sqcw1.style.background = 'white'
            sqct.style.background = 'green'
            btt.style.visibility = 'hidden'


            pontuacao_iniciante()
    
        }
    
        else if(sq[1].checked){
    
            const confirma = confirmacao.push(1)
            const ponto = pontuacao.push(0)


            sqct.style.background = 'white'
            sqcw1.style.background = 'white'
            sqcw.style.background = 'red'
            btt.style.visibility = 'hidden'
    
    
            pontuacao_iniciante()
        }
    
        else if(sq[2].checked){


            const confirma = confirmacao.push(1)
            const ponto = pontuacao.push(0)
    
            sqct.style.background = 'white'
            sqcw.style.background = 'white'
            sqcw1.style.background = 'red'
            btt.style.visibility = 'hidden'
    
            pontuacao_iniciante()
        }
    
    
    }
    function TreeQuestion(){
    
        var tq = document.getElementsByName('question3')
        var tqct = document.getElementById('tqct')
        var tqcw = document.getElementById('tqcw')
        var tqcw1 = document.getElementById('tqcw1')
        var btt = document.getElementById('button-for-display3')
    
        if(tq[0].checked){

            const confirma = confirmacao.push(1)
            const ponto = pontuacao.push(0)
            
            tqcw.style.background = 'red'
    
            tqct.style.background = 'white'
            tqcw1.style.background = 'white'
            btt.style.visibility = 'hidden'
                
            pontuacao_iniciante()
    
        }
    
        else if(tq[1].checked){

            const confirma = confirmacao.push(1)
            const ponto = pontuacao.push(1)


            tqct.style.background = 'green'
    
            tqcw.style.background = 'white'
            tqcw1.style.background = 'white'
            btt.style.visibility = 'hidden'

            pontuacao_iniciante()
    
        }
    
        else if(tq[2].checked){
            
            const confirma = confirmacao.push(1)
            const ponto = pontuacao.push(0)

            tqcw1.style.background = 'red'
    
            tqcw.style.background = 'white'
            tqct.style.background = 'white'
            btt.style.visibility = 'hidden'

            pontuacao_iniciante()
        }
    
    }

    function FourQuestion(){

        var foq = document.getElementsByName('question4')
        var foqct = document.getElementById('foqct')
        var foqcw = document.getElementById('foqcw')
        var foqcw1 = document.getElementById('foqcw1')
        var button_display = document.getElementById('button-for-display4')


        if(foq[0].checked){

            const confirma = confirmacao.push(1)
            const ponto = pontuacao.push(1)

            foqct.style.background = 'green'
            button_display.style.visibility = 'hidden'

            pontuacao_iniciante()

        }

        else if(foq[1].checked){

            const confirma = confirmacao.push(1)
            const ponto = pontuacao.push(0)

            foqcw.style.background = 'red'
            button_display.style.visibility = 'hidden'

            pontuacao_iniciante()
        }

        else if(foq[2].checked){

            const confirma = confirmacao.push(1)
            const ponto = pontuacao.push(0)

            foqcw1.style.background = 'red'
            button_display.style.visibility = 'hidden'

            pontuacao_iniciante()
        }
    }


    /*        ENTRANDO NO ITERMEDIARIO -------------------------------------------------------------------------------------------------*/

    
    var Inter_Confirmação = []
    var Inter_Pontuação = []
    
    function Inter_Calc_Pontuação(){

        var Iconfirma = 0
        var Isoma = 0
        var valor_pontuação = document.getElementById('valor-pontuação-inter')


        for(var i = 0; i < Inter_Confirmação.length; i++){

            Iconfirma += Inter_Confirmação[i]



        }


        for(var s = 0; s < Inter_Pontuação.length; s++){

            Isoma += Inter_Pontuação[s]
        }


        if(Iconfirma == 4){

            window.alert('funfou')
            var pontos = document.getElementById('valor-pontuação-inter')
            
            
            pontos.innerText = Isoma


            
        }


        
    }


    function InterFirstQuestion(){

        var First_Question = document.getElementsByName('questionI1')
        var Ifqct = document.getElementById('Ifqc-true')
        var Ifqcw = document.getElementById('Ifqc-wrong')
        var Ifqcw1 = document.getElementById('Ifqc-wrong1')
        var btt = document.getElementById('button-for-display5')


        if(First_Question[0].checked){

            Inter_Confirmação.push(1)
            Inter_Pontuação.push(0)

            Ifqcw.style.background = 'Red'

            btt.style.visibility = 'hidden'

            Inter_Calc_Pontuação()
    
        }


        else if(First_Question[1].checked){

            Inter_Confirmação.push(1)
            Inter_Pontuação.push(0)

            Ifqcw1.style.background = 'red'

            btt.style.visibility = 'hidden'

            Inter_Calc_Pontuação()
        }

        else if(First_Question[2]){

            Inter_Confirmação.push(1)
            Inter_Pontuação.push(1)

            Ifqct.style.background = 'green'

            btt.style.visibility = 'hidden'

            Inter_Calc_Pontuação()
        }


    }

    function InterSecondQuestion(){

        var Isq = document.getElementsByName('questionI2')
        var Isqct = document.getElementById('Isqct')
        var Isqcw = document.getElementById('Isqcw')
        var Isqcw1 = document.getElementById('Isqcw1')
        var btt = document.getElementById('button-for-display6')

        if(Isq[0].checked){

            
            Inter_Pontuação.push(1)
            Inter_Confirmação.push(1)

            Isqct.style.background = 'green'
            Isqct.style.transition = '.2s ease-in'
            btt.style.visibility = 'hidden'
            

            Inter_Calc_Pontuação()
        }

        else if(Isq[1].checked){

            
            Inter_Pontuação.push(0)
            Inter_Confirmação.push(1)

            Isqcw.style.background = 'red'
            Isqcw.style.transition = '.2s ease-in'
            btt.style.visibility = 'hidden'

            Inter_Calc_Pontuação()
        }

        else if(Isq[2].checked){

            Inter_Pontuação.push(0)
            Inter_Confirmação.push(1)

            Isqcw1.style.background = 'red'
            Isqcw1.style.transition = '.2s ease-in'
            btt.style.visibility = 'hidden'

            Inter_Calc_Pontuação()

        }
    }


    function InterTreeQuestion(){

        var Itq = document.getElementsByName('questionI3')
        var Itqct = document.getElementById('Itqct')
        var Itqcw = document.getElementById('Itqcw')
        var btt = document.getElementById('button-for-display7')


        if(Itq[0].checked){

            Inter_Confirmação.push(1)
            Inter_Pontuação.push(0)

            Itqcw.style.background = 'red'
            Itqcw.style.transition = '.3s ease-in'
            btt.style.visibility = 'hidden'

            Inter_Calc_Pontuação()
        }

        else if(Itq[1].checked){

            Inter_Confirmação.push(1)
            Inter_Pontuação.push(1)

            Itqct.style.background = 'green'
            Itqct.style.transition = '.2s ease-in'
            btt.style.visibility = 'hidden'


            Inter_Calc_Pontuação()
        }
    }


    function InterFourQuestion(){


        var Ifoq = document.getElementsByName('questionI4')
        var Ifoqct = document.getElementById('Ifoqct')
        var Ifoqcw = document.getElementById('Ifoqcw')
        var Ifoqcw1 = document.getElementById('Ifoqcw1')
        var btt = document.getElementById('button-for-display8')


        if(Ifoq[0].checked){

            Inter_Confirmação.push(1)
            Inter_Pontuação.push(0)

            Ifoqcw.style.background = 'red'
            Ifoqcw.style.transition = 'ease-in .2s'
            btt.style.visibility = 'hidden'

            Inter_Calc_Pontuação()
        }


        else if(Ifoq[1].checked){

            Inter_Confirmação.push(1)
            Inter_Pontuação.push(1)

            Ifoqct.style.background = 'green'
            Ifoqct.style.transition = 'ease-in .2s'
            btt.style.visibility = 'hidden'

            Inter_Calc_Pontuação()
        }


        else if(Ifoq[2].checked){

            Inter_Confirmação.push(1)
            Inter_Pontuação.push(0)

            Ifoqcw1.style.background = 'red'
            Ifoqcw1.style.transition = 'ease-in .2s'
            btt.style.visibility = 'hidden'

            Inter_Calc_Pontuação()
        }


    }

    /*COMEÇANDO NIVEL AVANÇADO APENAS 2 PERGUNTAS*/
    var AD_Confirmação = []
    var AD_Pontuação = []
    

    function Calc_pontuação_ad(){


        var Asoma = 0
        var Aconf = 0
        var result = document.getElementById('valor-pontuação-ad')

        for(var i =0; i < AD_Confirmação.length; i++){

            Aconf += AD_Confirmação[i]
        }

        for(var s = 0; s < AD_Pontuação.length; s++){

            Asoma += AD_Pontuação[s]
        }

        if(Aconf == 1){

            window.alert('confirmou')

            result.innerText = Asoma

        }

    }



    function AdvancedFirstQuestion(){
        AD_Confirmação.push(1)

        var btt = document.getElementById('button-for-display9')

        var pgt = document.getElementById('questions-ad1')

        var txtv = document.getElementById('ad-textarea').value

        var txtc = document.getElementById('resposta-display')



        if(txtv == 'notasbaixas = notas.filter(function(nota){retunr notas < 7})'){

            window.alert('foi hein')
            AD_Pontuação.push(1)
            btt.style.visibility = 'hidden'
            Calc_pontuação_ad()

            pgt.style.background = 'green'
        }
        
        else{
            
            pgt.style.transition = 'ease-in 2s'
            pgt.style.background = 'rgb(182, 43, 43)'
            txtc.innerText = 'Boa, essa é dificil mesmo, mas o real resultado é: notasbaixas = notas.filter(function(nota){retunr nota < 7})'
            


            txtc.style.visibility = 'visible'
            txtc.style.margin = 'auto'
            txtc.style.padding='2em'
            txtc.style.letterSpacing = '2px'
            btt.style.visibility = 'hidden'

            Calc_pontuação_ad()


        }




        
    }


