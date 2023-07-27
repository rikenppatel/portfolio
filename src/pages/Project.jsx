import React from 'react';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring/renderprops';
// import { ChevronRight } from 'react-feather';

import Meta from '../components/Meta';
import styles from './Project.module.css';
import projects from '../data/projects.json';

const Project = ({ style, mouseEnter, mouseLeave }) => {
  return (
    <animated.section style={style} className={styles.selected_works}>
      <Meta title='Riken Patel' url='https://abc.com/' />
      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className={styles.breadcrumb}
      >
        <Link to='/'>
          <span className={styles.inactive}>Home</span>
        </Link>
        <span className={styles.active}> / Work Experience</span>
      </div>
      <div className={styles.section_heading}>
        <div className={styles.main_container}>
          <h2 className={styles.main}> </h2>
        </div>
      </div>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <div className={styles.project_image}>
              <img
                src={project.image}
                alt=''
                className={styles.project_screenshot}
              />
            </div>
            <div className={styles.project_content}>
              <div>
                {project.company && (
                  <a
                    target='_blank'
                    href={project.link}
                    rel='noopener noreferrer'
                    className={styles.project_type}
                  >
                    {project.company}
                  </a>
                )}
                <h3 className={styles.project_name}>{project.name}</h3>
                <p className={styles.project_desc}>{project.description}</p>
              </div>
              {/* {project.company === 'Freelance' && (
                <a
                  target='_blank'
                  href={project.link}
                  onMouseEnter={mouseEnter}
                  onMouseLeave={mouseLeave}
                  rel='noopener noreferrer'
                  className={styles.project_link}
                >
                  View Project <ChevronRight />
                </a>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </animated.section>
  );
};

export default Project;
