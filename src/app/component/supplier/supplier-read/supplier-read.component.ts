import { Component } from '@angular/core';
import { Supplier } from './supplier.model';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-read',
  templateUrl: './supplier-read.component.html',
  styleUrls: ['./supplier-read.component.css']
})
export class SupplierReadComponent {
  suppliers!: Supplier[]
  displayedColumns = ['id', 'razaoSocial', 'nomeFantasia', 'cnpj', 'status_Fornecedor', 'nome', 'action']

  constructor(private supplierService: SupplierService) {}

  ngOnInit(): void {
    this.supplierService.read().subscribe(suppliers => {
      this.suppliers = suppliers
      console.log(suppliers)
    })
  }
} 


