const KEYS = {
    vendors: 'vendors',
    vendorId: 'vendorId'
}

export const getDepartmentCollection = () => ([
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
])

export function insertVendor(data) {
    let vendors = getAllVendor();
    data['id'] = generateVendorId()
    vendors.push(data)
    localStorage.setItem(KEYS.vendors, JSON.stringify(vendors))
}

export function updateVendor(data) {
    let vendors = getAllVendor();
    let recordIndex = vendors.findIndex(x => x.id === data.id);
    vendors[recordIndex] = { ...data }
    localStorage.setItem(KEYS.vendors, JSON.stringify(vendors));
}

export function deleteVendor(id) {
    let vendors = getAllVendor();
    vendors = vendors.filter(x => x.id !== id)
    localStorage.setItem(KEYS.vendors, JSON.stringify(vendors));
}

export function generateVendorId() {
    if (localStorage.getItem(KEYS.vendorId) == null)
        localStorage.setItem(KEYS.vendorId, '0')
    var id = parseInt(localStorage.getItem(KEYS.vendorId))
    localStorage.setItem(KEYS.vendorId, (++id).toString())
    return id;
}

export function getAllVendor() {
    if (localStorage.getItem(KEYS.vendors) == null)
        localStorage.setItem(KEYS.vendors, JSON.stringify([]))
    let vendors = JSON.parse(localStorage.getItem(KEYS.vendors));
    //map departmentID to department title
    let departments = getDepartmentCollection();
    return vendors.map(x => ({
        ...x,
        department: departments[x.departmentId - 1].title
    }))
}