import type { MetaFunction } from "@netlify/remix-runtime";
import ActionButton from "~/components/ActionButton";
import LineItem from '~/components/LineItem';
import LineItemBold from '~/components/LineItemBold';

export const meta: MetaFunction = () => {
  return [
    { title: "Dana Ranch Ward" },
    { name: "description", content: "Dana Ranch Ward Order Of Services" },
  ];
};

export default function Index() {
  return (
    /**
     * TODO: New component
     * - gets date automatically
     * - switces hero img by month automatically
     */
    <div className="w-full h-full">
      <img
        src="/img/christ_little_ones.jpg"
        className="pb-4 m-auto"
        alt="jesus"
      />
      <img
        src="/img/modern-logo.png"
        className="m-auto w-3/4 md:w-1/2 xl:w-1/3"
        alt="church-logo"
      />
      <div key="title-credits" className="church-font text-center p-1 py-2">
        <p className="text-2xl">Dana Ranch Ward</p>
        <p className="text-3xl">Sacrament Meeting</p>
        <p className="text-2xl">October 13, 2024</p>
      </div>

      {
        /*
      TODO: Remove component from index when we get posters for foyer
      */
      }
      <div className="pt-4">
        <ActionButton
          link="https://youtube.com/live/6qf7renaxxA?feature=share"
          text="Join via broadcast"
        />
      </div>
      <hr className="h-px my-8 bg-gray-400 border-0" />

      <div id="services" className="mx-2">
        <LineItem left="Presiding" right="Bishop Kent" />
        <LineItem left="Conducting" right="David Kolstad" />
        <LineItem left="Organist" right="Joe Capps" />
        <LineItem left="Chorister" right="Elizabeth Kasl" />

        <div className="bg-sky-600 rounded p-4 text-white my-2 pt-8 relative overflow-hidden">
          <img
            className="absolute left-0 top-0 w-full rounded opacity-75"
            src="/img/light-rays.svg"
            alt="light-rays"
          />
          <em className="sticky text-lg font-semibold">Announcements</em>
          <ol className="list-decimal ml-5 sticky">
            <li className="pt-1">
              Our ward is in charge of cleaning the building for the rest of the
              year, so be on the lookout for opportunities to help with those
              efforts.
            </li>
            <li className="pt-1">
              Tithing declaration will conclude at the end of November. To sign
              up please use the signup sheets by the clerk's office.
            </li>
            <li className="pt-1">
              Mission and Life Skills Prep for all Juniors and Seniors is held
              every 2nd and 4th Sunday at 4pm in the Relief Society room.
            </li>
          </ol>
        </div>

        <LineItem left="Opening Hymn" middle="We Thank Thee O God for a Prophet" right="19" />
        <LineItem left="Invocation" right="Ashlee Gray" />

        <LineItemBold middle="Ward Business" />

        <LineItem left="Sacrament Hymn" middle="O Lord of Hosts" right="178" />
        <LineItemBold middle="Administration of the Sacrament" />

        <LineItemBold middle="Bearing of Testimonies" />

        {
        /*
        <LineItem left="Speaker" right="Natalya Cox" />
        <LineItem left="Musical Number" middle="I Know That My Redeemer Lives" right="Dillon and Tegan Grenko" />
        <LineItem left="Intermediate Hymn" middle="Master, the Tempest is Raging" right="105" />
        <LineItem left="Speaker" right="Shaeli Kersee" />
        */
        }

        <LineItem left="Closing Hymn" middle="I Need Thee Every Hour" right="98" />

        <LineItem left="Benediction" right="Shaeli Kersee" />
      </div>

      <hr className="h-px my-8 bg-gray-400 border-0" />
    </div>
  );
}

/**
 * TODO:
 * Scaffold out what a relational db schema would look like
 * with this data model (laying the groundwork for lcr.danaranchward.org)
 * - members table
 *  - will need UI tool to sync/upload from a report from actual LCR. CSV compat likely.
 *  - will need upload endpoint to be able to dedupe members and also create new entries in members table.
 *  - will need ability to add "flag" or "annotation" rules to disable showing on speakers upcoming, etc. With UI to list/edit.
 * - prayers table
 *  - each entry will have a simple record of date, member ID, and type "opening" or "closing"
 * - speakers table
 *  - each entry will have simple record of date and member ID
 */
