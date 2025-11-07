class ContactMapper{
    toPersistence(domainContact){


        return{
                id: domainContact.id,
                name:  domainContact.name,
                email:  domainContact.email,
                phone:  domainContact.phone,
                category_id:  domainContact.categoryId,  //mapper dos dados do front para o banco

            }
    }
    toDomain(persistenceContact){

        return{
            id:persistenceContact.id,
            name:  persistenceContact.name,
            email:  persistenceContact.email,
            phone:  persistenceContact.phone,
            category :{

            id: persistenceContact.category_id,
            name: persistenceContact.category_name,  //aqui é o contrário
        },
        }
    }

}

export default new ContactMapper();
