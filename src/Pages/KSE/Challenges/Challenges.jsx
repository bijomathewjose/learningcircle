import React from "react";
import styles from "./Challenges.module.css";

import { useParams } from "react-router-dom";

import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import fvimg from "../assets/fvimg.png";

import AIStructure from "./Data/ai";
import WebStructure from "./Data/web";
import AndroidStructure from "./Data/android";
import BlockchainStructure from "./Data/blockchain";
import CivilStructure from "./Data/civil";
import CybersecStructure from "./Data/cybersec";
import FlutterStructure from "./Data/flutter";
import IEStructure from "./Data/i&e";
import QAStructure from "./Data/qa";
import RustStructure from "./Data/rust";
import Animation3DStructure from "./Data/animation3d";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f6842c",
    fontFamily: "Noto Sans",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontFamily: "Poppins",
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Challenges = () => {
  const { course } = useParams();
  const data = (function () {
    if (course === "ai") {
      return AIStructure;
    } else if (course === "web") {
      return WebStructure;
    } else if (course === "android") {
      return AndroidStructure;
    } else if (course === "blockchain") {
      return BlockchainStructure;
    } else if (course === "civil") {
      return CivilStructure;
    } else if (course === "cybersec") {
      return CybersecStructure;
    } else if (course === "flutter") {
      return FlutterStructure;
    } else if (course === "i&e") {
      return IEStructure;
    } else if (course === "qa") {
      return QAStructure;
    } else if (course === "rust") {
      return RustStructure;
    } else if (course === "animation3d") {
      return Animation3DStructure;
    }
  })();

  // To group the data according to bootcamp
  const groupedData = data.reduce((acc, curr) => {
    const { bootcamp, name, segments, segmentKarma } = curr;
    const obj = { name, segments, segmentKarma };
    const index = acc.findIndex((el) => el.bootcamp === bootcamp);
    if (index !== -1) {
      const courseIndex = acc[index].courseGroups.findIndex(
        (c) => c.name === name
      );
      if (courseIndex === -1) {
        acc[index].courseGroups.push(obj);
      }
    } else {
      acc.push({ bootcamp, courseGroups: [obj] });
    }
    return acc;
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                {course.charAt(0).toUpperCase() + course.slice(1) + " "}
                Challenges
              </p>
              <p className={styles.fv_content}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                excepturi officiis doloremque nobis iure quisquam earum
                molestiae, ducimus ipsam inventore enim, fugit, eum laborum
                dolor.
              </p>
            </div>
            <div className={styles.fv_image}>
              <img
                src={fvimg}
                alt="Group Learning pic"
                className={styles.fv_img}
              />
            </div>
          </div>

          {groupedData.map((difficulty) => (
            <div className={styles.tav_tasks_container}>
              <div className={styles.tav_tasks}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>
                          {difficulty.bootcamp.charAt(0).toUpperCase() +
                            difficulty.bootcamp.slice(1) +
                            " "}
                          Bootcamps
                        </StyledTableCell>

                        <StyledTableCell align="right">
                          Course's Link
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {difficulty.courseGroups.map((courses, index) => (
                        <StyledTableRow>
                          <StyledTableCell component="th" scope="row">
                            {courses.name}
                          </StyledTableCell>

                          <StyledTableCell align="right">
                            <a
                              href={
                                courses.segments || courses.segmentKarma
                                  ? `/kse/challenges/${course}/${difficulty.bootcamp}/${index}`
                                  : `/kse/pow/${course}/${difficulty.bootcamp}/${index}`
                              }
                              rel="noopener noreferrer"
                            >
                              <span className={styles.link}>Click Here</span>
                            </a>
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Challenges;
