import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();

async function main() {
  // Admins
  console.log('Creating Admins...');
  const adminData = [
    { username: 'admin1', email: 'admin1@example.com', password: 'password1' },
    { username: 'admin2', email: 'admin2@example.com', password: 'password2' },
  ];

  for (const admin of adminData) {
    await prisma.admin.create({ data: admin } as any);
  }

  // Teachers
  console.log('Creating Teachers...');
  const teacherData = [];
  for (let i = 1; i <= 5; i++) {
    teacherData.push({
      id: `teacher-${i}`,
      username: `teacher_user_${i}`,
      name: `TeacherName${i}`,
      surname: `TeacherSurname${i}`,
      email: `teacher${i}@example.com`,
      phone: `987654321${i}`,
      address: `456 Elm St ${i}`,
      bloodType: 'O+',
      sex: i % 2 === 0 ? 'FEMALE' : 'MALE',
    });
  }

  for (const teacher of teacherData) {
    await prisma.teacher.create({ data: teacher } as any);
  }

  // Classes
  console.log('Creating Classes...');
  const classData = [];
  for (let i = 1; i <= 3; i++) {
    classData.push({
      name: `Class ${String.fromCharCode(64 + i)}`, // A, B, C
      capacity: 30,
      supervisorId: `teacher-${i}`, // Ensure the supervisor exists in Teachers
      gradeid: i,
    });
  }

  for (const classItem of classData) {
    await prisma.class.create({ data: classItem } as any);
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
