function navInsert(){
	document.getElementById("navInsert").className = "active";
	document.getElementById("navUpdate").className = "";
	document.getElementById("navDelete").className = "";
	document.getElementById("navList").className   = "";
	document.getElementById("insertId").className  = "container";
	document.getElementById("list").className      = "container ocultar";
	[].forEach.call(document.querySelectorAll('.delete2'), function (el) {
  		el.style.visibility = 'hidden';
	});	
}
function navUpdate(){
	document.getElementById("navInsert").className = "";
	document.getElementById("navUpdate").className = "active";
	document.getElementById("navDelete").className = "";
	document.getElementById("navList").className   = "";
	document.getElementById("insertId").className  = "container ocultar";
	document.getElementById("list").className      = "container ocultar";
	[].forEach.call(document.querySelectorAll('.delete2'), function (el) {
  		el.style.visibility = 'hidden';
	});	
}
function navDelete(){
	document.getElementById("navInsert").className = "";
	document.getElementById("navUpdate").className = "";
	document.getElementById("navDelete").className = "active";
	document.getElementById("navList").className   = "";
	document.getElementById("insertId").className  = "container ocultar";
	document.getElementById("list").className      = "container fixed";
	document.getElementById("delete").className    = "";
	[].forEach.call(document.querySelectorAll('.delete2'), function (el) {
		el.style.visibility = 'visible';
	});
}
function navList(){
	document.getElementById("navInsert").className = "";
	document.getElementById("navUpdate").className = "";
	document.getElementById("navDelete").className = "";
	document.getElementById("navList").className   = "active";
	document.getElementById("insertId").className  = "container ocultar";
	document.getElementById("list").className      = "container fixed";
	document.getElementById("delete").className    = "ocultar";
	[].forEach.call(document.querySelectorAll('.delete2'), function (el) {
  		el.style.visibility = 'hidden';
	});
}



Vue.component('todo-item', {
  template: '\
      <button type="button" class="btn btn-danger" v-on:click="$emit(\'remove\')">Remover</button>\
  ',
  props: ['title']
})

var vue02 = new Vue({
  el: '#todo-list-example',
  data: {
  	msgInfCod: 'Código',
    msgInfNom: 'Nome',
    msgInfEnd: 'Endereço',
    msgBtnAdd: 'Inserir Cliente',
    msgCod: 'Código',
    msgNom: 'Nome',
    msgEnd: 'Endereço',
    msgRem: 'Remover Cliente',
    codigoText:  '',
    nomeText: 	 '',
    enderecoText:'',
    todos: []
  },
  methods: {
    inserirCliente: function () {
      this.todos.push({
        id: 		this.nextTodoId++,
        codigo: 	this.codigoText,
        nome: 		this.nomeText,
        endereco: 	this.enderecoText
      })
      this.codigoText 	= '',
      this.nomeText    	= '',
      this.enderecoText = ''
    }
  }
})

