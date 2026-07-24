import React from 'react';
import { Link } from 'react-router-dom';
import './Calendar.css';
import DayCard from '../components/DayCard';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric' 
  });
};

const Calendar = () => {
  const events = [
    // January Awareness Days
    {
      id: 1,
      title: 'National Human Trafficking Awareness Month',
      date: '2024-01-01',
      time: 'January',
      location: 'Global',
      description: 'Raising awareness about the crime of human trafficking and modern-day slavery.',
      category: 'awareness'
    },
    {
      id: 2,
      title: 'World Braille Day',
      date: '2024-01-04',
      time: 'All Day',
      location: 'Global',
      description: 'Commemorates the birth anniversary of Louis Braille and recognizes the importance of braille in creating inclusive societies.',
      category: 'awareness'
    },
    {
      id: 3,
      title: 'World Day of War Orphans',
      date: '2024-01-06',
      time: 'All Day',
      location: 'Global',
      description: 'Raises awareness about the plight of war orphans and the need to protect them.',
      category: 'awareness'
    },
    {
      id: 4,
      title: 'National Girl Child Day',
      date: '2024-01-11',
      time: 'All Day',
      location: 'India',
      description: 'Celebrated in India to raise awareness about the rights and education of girl children and address gender bias.',
      category: 'awareness'
    },
    {
      id: 5,
      title: 'International Day of Rural Women',
      date: '2024-01-15',
      time: 'All Day',
      location: 'Global',
      description: 'Recognizes the role of rural women in agricultural and rural development, food security and poverty reduction.',
      category: 'awareness'
    },
    {
      id: 6,
      title: 'World Leprosy Day',
      date: '2024-01-30',
      time: 'All Day',
      location: 'India',
      description: 'Observed on the last Sunday of January to spread awareness about leprosy and break the stigma associated with it.',
      category: 'health'
    },
    {
      id: 7,
      title: 'World Neglected Tropical Diseases Day',
      date: '2024-01-30',
      time: 'All Day',
      location: 'Global',
      description: 'Raises awareness about neglected tropical diseases and the need for their prevention, detection and treatment.',
      category: 'health'
    },
    // February Awareness Days
    {
      id: 8,
      title: 'World Wetlands Day',
      date: '2024-02-02',
      time: 'All Day',
      location: 'Global',
      description: 'Commemorates the signing of the Convention on Wetlands of International Importance on February 2, 1971.',
      category: 'environment'
    },
    {
      id: 9,
      title: 'World Cancer Day',
      date: '2024-02-04',
      time: 'All Day',
      location: 'Global',
      description: 'A global initiative to create awareness and education about cancer, improve early detection and treatment.',
      category: 'health'
    },
    {
      id: 10,
      title: 'International Day of Women and Girls in Science',
      date: '2024-02-11',
      time: 'All Day',
      location: 'Global',
      description: 'Celebrates the critical role women and girls play in science and technology communities.',
      category: 'awareness'
    },
    {
      id: 11,
      title: 'World Radio Day',
      date: '2024-02-13',
      time: 'All Day',
      location: 'Global',
      description: 'Celebrates radio as a powerful medium for communication, information sharing and cultural exchange.',
      category: 'awareness'
    },
    {
      id: 12,
      title: 'International Epilepsy Day',
      date: '2024-02-14',
      time: 'All Day',
      location: 'Global',
      description: 'Raises awareness about epilepsy, a neurological disorder affecting millions worldwide.',
      category: 'health'
    },
    {
      id: 13,
      title: 'International Mother Language Day',
      date: '2024-02-21',
      time: 'All Day',
      location: 'Global',
      description: 'Promotes linguistic and cultural diversity and multilingualism worldwide.',
      category: 'awareness'
    },
    {
      id: 14,
      title: 'World Thinking Day',
      date: '2024-02-22',
      time: 'All Day',
      location: 'Global',
      description: 'Celebrated by Girl Guides and Girl Scouts worldwide to think about others and global issues.',
      category: 'awareness'
    },
    {
      id: 15,
      title: 'National Science Day',
      date: '2024-02-28',
      time: 'All Day',
      location: 'India',
      description: 'Celebrates the discovery of Raman effect by Indian physicist Sir C.V. Raman and promotes scientific temper.',
      category: 'awareness'
    },
    // March Awareness Days
    {
      id: 16,
      title: 'World Wildlife Day',
      date: '2024-03-03',
      time: 'All Day',
      location: 'Global',
      description: 'Celebrates the beauty and diversity of flora and fauna and raises awareness about wildlife conservation.',
      category: 'environment'
    },
    {
      id: 17,
      title: 'World Hearing Day',
      date: '2024-03-03',
      time: 'All Day',
      location: 'Global',
      description: 'Raises awareness about hearing loss and promotes ear care and hearing health.',
      category: 'health'
    },
    {
      id: 18,
      title: 'World Kidney Day',
      date: '2024-03-14',
      time: 'All Day',
      location: 'Global',
      description: 'Highlights the importance of kidneys and reducing the frequency of kidney disease.',
      category: 'health'
    },
    {
      id: 19,
      title: 'World Consumer Rights Day',
      date: '2024-03-15',
      time: 'All Day',
      location: 'Global',
      description: 'Promotes consumer rights and demands that governments and corporations take action to protect consumers.',
      category: 'awareness'
    },
    {
      id: 20,
      title: 'World Down Syndrome Day',
      date: '2024-03-21',
      time: 'All Day',
      location: 'Global',
      description: 'Raises awareness about Down syndrome and advocates for the rights and inclusion of people with Down syndrome.',
      category: 'awareness'
    },
    {
      id: 21,
      title: 'World Forest Day',
      date: '2024-03-21',
      time: 'All Day',
      location: 'Global',
      description: 'Celebrates and raises awareness about the importance of all types of forest ecosystems.',
      category: 'environment'
    },
    {
      id: 22,
      title: 'World Meteorological Day',
      date: '2024-03-23',
      time: 'All Day',
      location: 'Global',
      description: 'Commemorates the establishment of the World Meteorological Organization and the importance of weather and climate.',
      category: 'environment'
    },
    {
      id: 23,
      title: 'World TB Day',
      date: '2024-03-24',
      time: 'All Day',
      location: 'Global',
      description: 'Raises awareness about tuberculosis, its transmission, and the need for prevention and treatment.',
      category: 'health'
    },
    // April Awareness Days
    {
      id: 24,
      title: 'World Autism Awareness Day',
      date: '2024-04-02',
      time: 'All Day',
      location: 'Global',
      description: 'Raises awareness about autism and Asperger syndrome to promote acceptance and inclusion.',
      category: 'awareness'
    },
    {
      id: 25,
      title: 'World Health Day',
      date: '2024-04-07',
      time: 'All Day',
      location: 'Global',
      description: 'Marks the anniversary of the founding of the World Health Organization and focuses on a specific health theme each year.',
      category: 'health'
    },
    {
      id: 26,
      title: 'World Hemophilia Day',
      date: '2024-04-17',
      time: 'All Day',
      location: 'Global',
      description: 'Raises awareness about hemophilia and other inherited bleeding disorders.',
      category: 'health'
    },
    {
      id: 27,
      title: 'Earth Day',
      date: '2024-04-22',
      time: 'All Day',
      location: 'Global',
      description: 'Demonstrates support for environmental protection and promotes sustainable practices worldwide.',
      category: 'environment'
    },
    {
      id: 28,
      title: 'World Malaria Day',
      date: '2024-04-25',
      time: 'All Day',
      location: 'Global',
      description: 'Raises awareness about malaria and the efforts to control and prevent the disease globally.',
      category: 'health'
    },
    // May Awareness Days
    {
      id: 29,
      title: 'International Day of Families',
      date: '2024-05-15',
      time: 'All Day',
      location: 'Global',
      description: 'Highlights the importance of families and family-friendly policies in development.',
      category: 'awareness'
    },
    {
      id: 30,
      title: 'World Hypertension Day',
      date: '2024-05-17',
      time: 'All Day',
      location: 'Global',
      description: 'Raises awareness about hypertension (high blood pressure) and its prevention and treatment.',
      category: 'health'
    },
    {
      id: 31,
      title: 'World Tuberculosis Day',
      date: '2024-05-18',
      time: 'All Day',
      location: 'Global',
      description: 'Raises awareness about tuberculosis and the efforts to eliminate this curable and preventable disease.',
      category: 'health'
    },
    {
      id: 32,
      title: 'World No Tobacco Day',
      date: '2024-05-31',
      time: 'All Day',
      location: 'Global',
      description: 'Raises awareness about the health risks associated with tobacco use and promotes tobacco control policies.',
      category: 'health'
    },
    // June Awareness Days
    {
      id: 33,
      title: 'World Environment Day',
      date: '2024-06-05',
      time: 'All Day',
      location: 'Global',
      description: 'Encourages awareness and action for the protection of the environment.',
      category: 'environment'
    },
    {
      id: 34,
      title: 'World Oceans Day',
      date: '2024-06-08',
      time: 'All Day',
      location: 'Global',
      description: 'Celebrates the oceans and raises awareness about the importance of ocean conservation.',
      category: 'environment'
    },
    {
      id: 35,
      title: 'World Blood Donor Day',
      date: '2024-06-14',
      time: 'All Day',
      location: 'Global',
      description: 'Thanks blood donors and raises awareness about the need for safe blood products.',
      category: 'health'
    },
    // July Awareness Days
    {
      id: 36,
      title: 'World Population Day',
      date: '2024-07-11',
      time: 'All Day',
      location: 'Global',
      description: 'Raises awareness about population issues including gender equality, poverty and maternal health.',
      category: 'awareness'
    },
    {
      id: 37,
      title: 'World Youth Skills Day',
      date: '2024-07-15',
      time: 'All Day',
      location: 'Global',
      description: 'Highlights the importance of equipping young people with skills for employment and entrepreneurship.',
      category: 'awareness'
    },
    // August Awareness Days
    {
      id: 38,
      title: 'World Breastfeeding Day',
      date: '2024-08-01',
      time: 'All Day',
      location: 'Global',
      description: 'Promotes exclusive breastfeeding for the first six months of life for optimal child growth and development.',
      category: 'health'
    },
    {
      id: 39,
      title: 'International Youth Day',
      date: '2024-08-12',
      time: 'All Day',
      location: 'Global',
      description: 'Celebrates the energy and potential of young people and recognizes the challenges they face.',
      category: 'awareness'
    },
    {
      id: 40,
      title: 'World Humanitarian Day',
      date: '2024-08-19',
      time: 'All Day',
      location: 'Global',
      description: 'Recognizes humanitarian aid workers and their contribution to saving lives and alleviating suffering.',
      category: 'volunteer'
    },
    // September Awareness Days
    {
      id: 41,
      title: 'World Literacy Day',
      date: '2024-09-08',
      time: 'All Day',
      location: 'Global',
      description: 'Highlights the importance of literacy for individuals, communities and societies.',
      category: 'awareness'
    },
    {
      id: 42,
      title: 'World Suicide Prevention Day',
      date: '2024-09-10',
      time: 'All Day',
      location: 'Global',
      description: 'Raises awareness about suicide prevention and reduces stigma around mental health issues.',
      category: 'health'
    },
    {
      id: 43,
      title: 'International Day of Democracy',
      date: '2024-09-15',
      time: 'All Day',
      location: 'Global',
      description: 'Promotes and celebrates democratic principles and values worldwide.',
      category: 'awareness'
    },
    {
      id: 44,
      title: 'World Ozone Day',
      date: '2024-09-16',
      time: 'All Day',
      location: 'Global',
      description: 'Commemorates the date of signing of the Montreal Protocol and promotes ozone layer protection.',
      category: 'environment'
    },
    // October Awareness Days
    {
      id: 45,
      title: 'World Habitat Day',
      date: '2024-10-07',
      time: 'All Day',
      location: 'Global',
      description: 'Recognizes the basic right to adequate shelter and housing for all.',
      category: 'awareness'
    },
    {
      id: 46,
      title: 'World Mental Health Day',
      date: '2024-10-10',
      time: 'All Day',
      location: 'Global',
      description: 'Raises awareness about mental health issues and promotes mental health education worldwide.',
      category: 'health'
    },
    {
      id: 47,
      title: 'World Sight Day',
      date: '2024-10-10',
      time: 'All Day',
      location: 'Global',
      description: 'Raises awareness about blindness and vision impairment globally.',
      category: 'health'
    },
    {
      id: 48,
      title: 'International Day of the Girl Child',
      date: '2024-10-11',
      time: 'All Day',
      location: 'Global',
      description: 'Highlights the challenges girls face and promotes girls\' empowerment and rights.',
      category: 'awareness'
    },
    {
      id: 49,
      title: 'World Standards Day',
      date: '2024-10-14',
      time: 'All Day',
      location: 'Global',
      description: 'Recognizes the importance of standardization for industrial development and international trade.',
      category: 'awareness'
    },
    // November Awareness Days
    {
      id: 50,
      title: 'World Diabetes Day',
      date: '2024-11-14',
      time: 'All Day',
      location: 'Global',
      description: 'Raises awareness about diabetes, its symptoms, and the importance of early detection and treatment.',
      category: 'health'
    },
    {
      id: 51,
      title: 'International Day for Tolerance',
      date: '2024-11-16',
      time: 'All Day',
      location: 'Global',
      description: 'Promotes tolerance, respect for diversity, and non-violence among communities.',
      category: 'awareness'
    },
    {
      id: 52,
      title: 'World Toilet Day',
      date: '2024-11-19',
      time: 'All Day',
      location: 'Global',
      description: 'Raises awareness about the sanitation crisis and the need for clean toilets worldwide.',
      category: 'awareness'
    },
    {
      id: 53,
      title: 'World Philosophy Day',
      date: '2024-11-21',
      time: 'All Day',
      location: 'Global',
      description: 'Recognizes the importance of philosophical reflection and critical thinking in society.',
      category: 'awareness'
    },
    // December Awareness Days
    {
      id: 54,
      title: 'World AIDS Day',
      date: '2024-12-01',
      time: 'All Day',
      location: 'Global',
      description: 'World AIDS Day is dedicated to raising awareness about the AIDS pandemic caused by the spread of HIV infection and mourning those who have died of the disease.',
      category: 'health'
    },
    {
      id: 55,
      title: 'National Pollution Control Day',
      date: '2024-12-02',
      time: 'All Day',
      location: 'India',
      description: 'Observed in India to create awareness about pollution and its effects on health and environment.',
      category: 'environment'
    },
    {
      id: 56,
      title: 'International Day of Persons with Disabilities',
      date: '2024-12-03',
      time: 'All Day',
      location: 'Global',
      description: 'Promoting the rights and well-being of persons with disabilities in all spheres of society.',
      category: 'awareness'
    },
    {
      id: 57,
      title: 'International Volunteer Day',
      date: '2024-12-05',
      time: 'All Day',
      location: 'Global',
      description: 'Recognizing and promoting the tireless work of volunteers around the world who contribute to making the world a better place.',
      category: 'volunteer'
    },
    {
      id: 58,
      title: 'Human Rights Day',
      date: '2024-12-10',
      time: 'All Day',
      location: 'Global',
      description: 'Commemorates the day in 1948 when the United Nations General Assembly adopted the Universal Declaration of Human Rights.',
      category: 'awareness'
    },
    {
      id: 59,
      title: 'National Energy Conservation Day',
      date: '2024-12-14',
      time: 'All Day',
      location: 'India',
      description: 'Promoting energy conservation and encouraging efficient use of energy resources across the nation.',
      category: 'environment'
    },
    {
      id: 60,
      title: 'International Migrants Day',
      date: '2024-12-18',
      time: 'All Day',
      location: 'Global',
      description: 'Recognizes the contributions and rights of migrants worldwide and promotes their social and cultural integration.',
      category: 'awareness'
    }
  ];

  return (
    <div className="calendar">
      {/* Hero Section */}
      <section className="calendar-hero">
        <div className="calendar-hero-overlay"></div>
        <div className="calendar-hero-content">
          <h1>Awareness Days Calendar</h1>
          <p>Stay informed about national and international awareness days</p>
        </div>
      </section>

      {/* Events List Section */}
      <section className="events-list-section">
        <div className="section-container">
          <h2>National & International Awareness Days</h2>
          <div className="events-grid">
            {events.map((event) => (
              <div key={event.id}>
                <DayCard 
                  date={formatDate(event.date)}
                  title={event.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="calendar-cta">
        <div className="section-container">
          <h2>Want to Learn More About These Days?</h2>
          <p>Contact us for educational resources and partnership opportunities.</p>
          <Link to="/contact" className="btn btn-primary">
            <i className="fas fa-envelope"></i> Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Calendar;