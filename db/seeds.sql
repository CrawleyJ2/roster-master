

INSERT INTO departments (department_name)
VALUES
('Management'),
('Sales'),
('Service'),
('Operations');


INSERT INTO roles (title, salary, department_id)
VALUES
('Senior Manager', 100000.00, 1)
('Sales Manager', 85000.00, 2)
('Service Manager', 78000.00, 3)
('Operations Manager', 70000.00, 4)
('Executive Assistant', 65000.00, 1)
('Receptionist', 48000.00, 4)
('Service Supervisor', 55000.00, 3)
('Sales Assistance', 58000.00, 2)
('Operations Supervisor', 60000.00, 4)
('Inside Sales Rep', 55000.00, 2)
('Service Rep', 45000.00, 3)
('Technician', 45000.00, 4)

INSERT INTO employees
VALUES (first_name, last_name, role_id, manager_id)