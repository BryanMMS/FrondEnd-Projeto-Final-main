import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier-read/supplier.model';
import { SupplierService } from '../supplier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.css']
})
export class SupplierCreateComponent implements OnInit{
   supplier: Supplier = {
  razaoSocial:'',
  nomeFantasia:'',
  cnpj:0,
  status_Fornecedor:'',
  nome: ''

   }

   constructor(private supplierService: SupplierService,
    private router:Router) { }

    ngOnInit(): void {
        
    }

    createSupplier(): void{
      this.supplierService.create(this.supplier).subscribe(()=>{
        this.supplierService.showMessage('Produto criado')
        this.router.navigate(['/suppliers'])
      })
    }

    cancel(): void {
      this.router.navigate(['/suppliers'])
    }
}
