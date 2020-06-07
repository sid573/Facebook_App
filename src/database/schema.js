/*
    User
    {
        { _id: "PSID", _name: ""},
    }

    Shop
    {
        {S_id: <id>, name: 'name'},
    }

    Category
    {
        {category_id: <id>, category_name: 'cat'},
    }

    Product
    {
        {S_id: <ForeignKey>, p_id: <id>, p_name: 'name', price: 'RSxx', quantity: 'Y/N'}
    }

    

SHOP:[{ 
	S_id: <id>;
	name: 'name';

    CUSTOMERS:													
	{																	
		c_id: <object1id>,													
		name:"name",														
		email:"email",														
	};																	
	PRODUCTS:[
	{
		category:[
			category_id: <id>,
			category_name: 'cat',
			products:[
				{
					p_id: <id>,
					p_name: 'name',
					price: 'RSxx',
					status: 'Y/N';
				}
			]
		]
	}
	],
	ORDERS: [
	{
		order_id: <id>,
		customer: c_id,
		address: 'add',
		items_ordered: [
			{
				p_id1: p_id1;
				quantity :'XX',
			},
			{
				p_id2: p_id2;
				quantity :'XX',
			},
		],
		total: 'RSXXX',
	}
	}
	]

	TIME_SLOT: [
	{
		day: 'day',
		time: 'time',
		user_id: 'user',
	}
	],
}
];
*/