
// 1 Constante de mi chart

const ctx = document.getElementById('myChart');
const names =['HTML','CSS','JS','Boostrap','Angular', 'Consumir APIS'];
const ages =[88,69,72,25,45,50]

const myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: names,
        datasets:[{
            label:'Skill Front End',
            data: ages,
            backgroundColor: [
                'rgba(116, 72, 194, .2)', 
                'rgba(33, 192, 215, .2)', 
                'rgba(217, 158, 43, .2)', 
                'rgba(205, 58, 129, .2)', 
                'rgba(156, 153, 204, .2)', 
                'rgba(225, 78, 202, .2)',
            ],
            borderColor:[
                
                'rgba(116, 72, 194, 1)', 
                'rgba(33, 192, 215, 1)', 
                'rgba(217, 158, 43, 1)', 
                'rgba(205, 58, 129, 1)', 
                'rgba(0, 153, 204, 1)', 
                'rgba(225, 78, 202, 1)',
            ],
            borderWidth: 1
        }],
    },
    options: {
        scales: {
            r: {
                suggestedMin: 10,
                suggestedMax: 100
            }
        }
    }
})